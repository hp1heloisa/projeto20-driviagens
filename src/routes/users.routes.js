import { Router } from "express";
import { createPassenger, getPassengersFlights } from "../controllers/users.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passenger } from "../schemas/users.schema.js";

const usersRouter = Router();

usersRouter.post("/passengers", validateSchema(passenger), createPassenger);
usersRouter.get("/passengers/travels", getPassengersFlights);

export default usersRouter;