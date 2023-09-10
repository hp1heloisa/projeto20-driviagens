import { Router } from "express";

const travelsRouter = Router(); 

travelsRouter.post("/cities");
travelsRouter.post("/flights");
travelsRouter.post("/travels");
travelsRouter.get("/flights");

export default travelsRouter;