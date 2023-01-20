import { Router } from "express";
import { findSongs, store, findOneSong } from "./controller";
import { requireToken } from "../middlewares/requireToken";
const songRouter = Router();

songRouter.post("/", store);
songRouter.get("/",requireToken,findSongs)
songRouter.get("/:id",requireToken,findOneSong)
export default songRouter;