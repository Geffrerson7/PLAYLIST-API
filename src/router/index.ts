import type { Application, Router } from "express";
import * as ROUTES from "../components";

const routes: [string, Router][] = [
  ["users", ROUTES.userRouter],
  ["playlist", ROUTES.playlistRouter],
  ["songs", ROUTES.songRouter],
];

const router = (app: Application): void => {
  routes.forEach(([path, controler]) => {
    app.use(`/api/v1/${path}`, controler);
  });
};

export default router;