import express, { type Application } from "express";
import router from "./router";
import cors from 'cors';

const app: Application = express();

app.use(cors())
app.use(express.json());
router(app);

export default app;