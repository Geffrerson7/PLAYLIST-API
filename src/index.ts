import app from "./app";
import dotenv from "dotenv";

dotenv.config()
const PORT : number = process.env.PORT ? parseInt(process.env.PORT) : 8000;

app.listen(PORT, () => console.log(`Server init at http://localhost:${PORT}`));