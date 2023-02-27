import type { Request, Response } from "express";
import prisma from "../../datasource";
import dotenv from 'dotenv';

dotenv.config()

export const store = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;

        const song = await prisma.song.create({ data });

        res.status(201).json({ ok: true, data: song, message: "Canción creada correctamente" });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};

export const findOneSong = async (req: Request, res: Response): Promise<void> => {
    try {
        const uid = (req as any).uid
        let message: string = "Unauthenticated user"
        let isPrivate: boolean = false
        let song: any = {}

        const idSong = Number(req.params.id);

        song = await prisma.song.findMany({
            where: {
                id: idSong,
                isPrivate
            },
        });

        if (uid) {

            message = "Authenticated user"
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

        let message: string = "Unauthenticated user"
        let whereClause: Record<string, boolean> = { isPrivate: false }

        if (uid) {
            whereClause = {}
            message = "Authenticated user"
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
