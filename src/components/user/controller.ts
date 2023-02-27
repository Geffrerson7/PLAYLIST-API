import type { Request, Response } from 'express'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../../datasource";

dotenv.config()

export const findAll = async (_req: Request, res: Response): Promise<void> => {

    try {
        const users = await prisma.user.findMany();
        res.status(200).json({
            ok: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error })
    }

}
export const store = async (req: Request, res: Response): Promise<void> => {

    try {

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const { email, name, password, date_born } = req.body;
        let user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (user) {
            res.status(403).json({ error: "Ese correo ya fue registrado, use otro." });
        } else {
            const newUser = await prisma.user.create({
                data: {

                    name,
                    email,
                    password: bcrypt.hashSync(password, salt),
                    date_born: new Date(date_born)
                }
            })

            res.status(201).json({ ok: true, message: "Usuario creado correctamente", newUser })
        }

    } catch (error) {

        res.status(500).json({ ok: false, message: error })
    }


}

export const login = async (req: Request, res: Response): Promise<void> => {

    try {
        const { email, password } = req.body;

        let user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            res.status(403).json({ error: "No existe este usuario" });
        } else {
            const respuestaPassword = await comparePassword(password, user.password);
            if (!respuestaPassword)
                res.status(403).json({ error: "Contraseña incorrecta" })
            else {
                const token = generateToken(user?.id);
                const loggedUser = await prisma.user.update({
                    where: {
                        email: user.email,
                    },
                    data: {
                        last_session: new Date(),
                    },
                })
                res.json({ token, login_Date: loggedUser.last_session })

            }

        }

    } catch (error) {
        res.status(500).json({ error: "Error de servidor" });
    }

}

const comparePassword = async function (candidatePassword: string, hashPassword: string) {
    return await bcrypt.compare(candidatePassword, hashPassword);
}

export const generateToken = (uid: any) => {
    const expiresIn = "2 days";
    try {
        const token = jwt.sign({ uid }, process.env.JWT_SECRET!, { expiresIn });

        return { token, expiresIn };

    } catch (error) {
        return error;
    }
}
