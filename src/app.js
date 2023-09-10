import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv"
import router from "./routes/index.routes.js";
import errorHandler from "./middlewares/errors.middleware.js";

const app = express();

dotenv.config()

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler)


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
