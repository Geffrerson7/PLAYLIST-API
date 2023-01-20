import type {Request, Response} from 'express'
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
//import jwt from "jsonwebtoken";

export const findAll =async (_req:Request, res: Response): Promise<void> => {

    try {
        const users = await prisma.user.findMany();
        res.status(200).json({
            ok: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({ok: false, message: error})
    }
    
}
export const store =async (req:Request, res: Response): Promise<void> => {

    try {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const {email, name, password, date_born, playlists}= req.body;
        const user = await prisma.user.create({
            data: {
                
                name,
                email,
                password: bcrypt.hashSync(password, salt),
                date_born: new Date(date_born)
              }
        })
        
        res.status(201).json({ok: true, message: "Usuario creado correctamente"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ok: false, message: error})
    }
    
}