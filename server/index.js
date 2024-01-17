import express from "express";
import dotenv from "dotenv";
import router from "./routes/Routes.js";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));
dotenv.config();
app.use(express.json());

app.use(router);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(` app running on port ${PORT}!`));
