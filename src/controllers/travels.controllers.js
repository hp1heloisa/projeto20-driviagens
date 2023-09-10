import httpStatus from "http-status";
import travelsServices from "../services/travels.services.js";

export async function createCity(req, res) {
    const { name } = req.body;
    await travelsServices.createCity(name);
    res.sendStatus(httpStatus.CREATED);
}

export async function createFlight(req, res){
    const { origin, destination, date } = req.body;
    await travelsServices.createFlight(origin, destination, date);
    res.sendStatus(httpStatus.CREATED);
}

export async function createTravel(req, res){
    const { passengerId, flightId } = req.body;
    await travelsServices.createTravel(passengerId, flightId);
    res.sendStatus(httpStatus.CREATED);
}