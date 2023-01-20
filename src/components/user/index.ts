import { Router } from "express";
import { findAll, store, login } from "./controller";
const userRouter:Router = Router();

userRouter.get("/", findAll);
userRouter.post("/", store);
userRouter.post("/login", login);

export default userRouter;