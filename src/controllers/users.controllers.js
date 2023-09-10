import httpStatus from "http-status";
import usersServices from "../services/users.services.js";

export async function createPassenger(req, res){
    const { firstName, lastName } = req.body;
    await usersServices.createPassenger(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);
}

export async function getPassengersFlights(req, res){
    const travels = await usersServices.getPassengersFlights(req.query);
    res.send(travels);
}