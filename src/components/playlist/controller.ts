import type { Request, Response } from "express";
import prisma from "../../datasource";

export const findUserPlaylists = async (req: Request,res: Response): Promise<void> => {
  try {
    const idUser = Number(req.params.idUser);
    const playlist = await prisma.playlist.findMany({
      where: {
        user_id: idUser,
      },
      select: {
        id: true,
        name: true,
      },
    });
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    const playlist = await prisma.playlist.create({
      include: {
        songs: true,
      },
      data: {
        name: data.name,
        user: { connect: { id: data.user_id } },
        songs: {
          create: data.songs,
        },
      },
    });

    res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

export const addSongToPlaylist = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    const playlist = await prisma.playlist.update({
      where:{
        id: data.id_playlist
      },
      include: {
        songs: true,
      },
      data: {
        songs: { connect: { id: data.id_song } }
      }
    });

    res.json(playlist);
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};
