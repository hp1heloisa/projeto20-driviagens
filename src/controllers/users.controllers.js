import httpStatus from "http-status";
import usersServices from "../services/users.services.js";

export async function createPassanger(req, res){
    const { firstName, lastName } = req.body;
    await usersServices.createPassanger(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);
}