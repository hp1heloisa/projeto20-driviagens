import { Router } from "express";
import { createPassanger } from "../controllers/users.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passanger } from "../schemas/users.schema.js";

const usersRouter = Router();

usersRouter.post("/passangers", validateSchema(passanger), createPassanger);
usersRouter.get("/passengers/travels");

export default usersRouter;