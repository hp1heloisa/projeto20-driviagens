import internalServerError from "../errors/internalServer.js";
import usersRepository from "../repositories/users.repository.js";

async function createPassenger(firstName, lastName) {
    const answer = await usersRepository.createPassenger(firstName, lastName);
    return answer;
}

async function getPassengersFlights({name}) {
    const travels = await usersRepository.getPassengersFlights(name);
    if (travels.length > 10) throw internalServerError();
    return travels;
}

const usersServices = {
    createPassenger,
    getPassengersFlights
}

export default usersServices;