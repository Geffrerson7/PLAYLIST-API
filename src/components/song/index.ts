import { Router } from "express";
import { findSongs, store, findOneSong } from "./controller";

const songRouter = Router();

songRouter.post("/", store);
songRouter.get("/",findSongs)
songRouter.get("/:id",findOneSong)
export default songRouter;