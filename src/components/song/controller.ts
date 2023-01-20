import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';


dotenv.config()
const prisma = new PrismaClient();

export const store = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;

        await prisma.song.create({ data });

        res.status(201).json({ ok: true, message: "Canción creada correctamente" });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};

export const findOneSong = async (req: Request, res: Response): Promise<void> => {
    try {
        const uid = (req as any).uid
        let message: string = "Unauthorized"
        let status: string = "public"
        let song: any = {}

        const idSong = Number(req.params.id);

        song = await prisma.song.findMany({
            where: {
                id: idSong,
                status
            },
        });

        if (uid) {

            message = "Authorized"
            song = await prisma.song.findUnique({
                where: {
                    id: idSong

                },
            });

        }

        
        res.json({ song, message });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}

export const findSongs = async (req: Request, res: Response): Promise<void> => {
    try {
        const uid = (req as any).uid

        let message: string = "Unauthorized"
        let whereClause: Record<string, string> = { status: "public" }

        if (uid) {
            whereClause = {}
            message = "Authorized"
        }

        const songs = await prisma.song.findMany({
            where: whereClause
        });

        res.status(200).json({
            ok: true,
            data: songs,
            message
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};
