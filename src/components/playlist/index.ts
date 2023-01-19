import { Router } from "express";
import { store,findUserPlaylists,addSongToPlaylist } from "./controller";

const playlistRouter = Router();

playlistRouter.post("/", store);
playlistRouter.get("/user/:idUser",findUserPlaylists)
playlistRouter.put("/add-song",addSongToPlaylist)
export default playlistRouter;