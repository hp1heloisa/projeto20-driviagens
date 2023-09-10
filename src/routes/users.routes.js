import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passanger } from "../schemas/users.schema.js";

const usersRouter = Router();

usersRouter.post("/passangers", validateSchema(passanger));
usersRouter.get("/passengers/travels");

export default usersRouter;