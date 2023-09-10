import badRequestError from "../errors/badRequest.js";
import internalServerError from "../errors/internalServer.js";
import usersRepository from "../repositories/users.repository.js";

async function createPassenger(firstName, lastName) {
    const answer = await usersRepository.createPassenger(firstName, lastName);
    return answer;
}

async function getPassengersFlights(query) {
    if (query.page && (isNaN(query.page) || query.page<=0)){
        throw badRequestError('Invalid page value');
    }
    const travels = await usersRepository.getPassengersFlights(query);
    if (travels.length > 10) throw internalServerError();
    return travels;
}

const usersServices = {
    createPassenger,
    getPassengersFlights
}

export default usersServices;