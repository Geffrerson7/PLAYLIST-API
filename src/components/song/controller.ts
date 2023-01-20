import type { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const prisma = new PrismaClient();

dotenv.config()

export const store = async (req: Request, res: Response): Promise<void> => {
    try {
    const data = req.body;
  
    await prisma.song.create({data});
  
      res.status(201).json({ ok: true, message: "Canción creada correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };

export const findOneSong = async (req: Request,res: Response): Promise<void> =>{
    try {
        const idSong = Number(req.params.id);
        const song = await prisma.song.findUnique({
            where: {
                id: idSong,
              },
        });
        res.json(song);
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
      }
}



export const findSongs = async (req: Request, res: Response): Promise<void> => {
    try {
        let message:string = ""
        let whereClause:Record<string, string> = {status: "public"}
        const { authorization } = req.headers;
        if(!authorization){
            message="Unauthorized"
            
        }else if (!authorization.startsWith("Bearer ")){
            message= "Token format wrong"
            
        }else{
            const token = authorization.replace("Bearer ", "");
            const decoded = jwt.verify(token, String(process.env.JWT_SECRET));
            if (decoded) {
                whereClause = {}
                message="Authorized"
            }
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
