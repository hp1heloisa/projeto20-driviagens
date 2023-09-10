import { Router } from "express";
import { createCity, createFlight, createTravel } from "../controllers/travels.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { city, flight, travel } from "../schemas/travels.schema.js";

const travelsRouter = Router(); 

travelsRouter.post("/cities", validateSchema(city), createCity);
travelsRouter.post("/flights", validateSchema(flight), createFlight);
travelsRouter.post("/travels", validateSchema(travel), createTravel);
travelsRouter.get("/flights");

export default travelsRouter;