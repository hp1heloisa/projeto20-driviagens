import { Router } from "express";
import { createCity, createFlight, createTravel, getFlights } from "../controllers/travels.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { city, date, flight, travel } from "../schemas/travels.schema.js";

const travelsRouter = Router(); 

travelsRouter.post("/cities", validateSchema(city), createCity);
travelsRouter.post("/flights", validateSchema(flight), createFlight);
travelsRouter.post("/travels", validateSchema(travel), createTravel);
travelsRouter.get("/flights", validateSchema(date),getFlights);

export default travelsRouter;