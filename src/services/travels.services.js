import dayjs from "dayjs";
import conflictError from "../errors/conflict.js";
import formatError from "../errors/format.js";
import notFoundError from "../errors/notFound.js";
import travelsRepositories from "../repositories/travels.repository.js";
import usersRepository from "../repositories/users.repository.js";

async function createCity(name) {
    const conflict = await travelsRepositories.findCity(name);
    if (conflict.length > 0) throw conflictError('Cidade já existe!');
    const answer = await travelsRepositories.createCity(name);
    return answer;
}

async function createFlight(origin, destination, date){
    if (dayjs() >= dayjs(date, {format: 'DD-MM-YYYY'})) throw formatError('A data do voo deve ser maior que a data atual!');
    if (origin == destination) throw conflictError('Origem e destino devem ser diferentes!');
    const findOrigin = await travelsRepositories.findCity(origin);
    const findDestination = await travelsRepositories.findCity(destination);
    if (findOrigin.length == 0 || findDestination.length == 0) throw notFoundError('Cidade');
    const answer = await travelsRepositories.createFlight(origin, destination, date);
    return answer;
}

async function createTravel(passengerId, flightId){
    const findPassanger = await usersRepository.findPassanger(passengerId);
    if (findPassanger.length == 0) throw notFoundError("Passageiro");
    const findFlight = await travelsRepositories.findFlight(flightId);
    if (findFlight.length == 0) throw notFoundError("Voo");
    const answer = await travelsRepositories.createTravel(passengerId, flightId);
    return answer;
}

const travelsServices = {
    createCity,
    createFlight,
    createTravel
}

export default travelsServices;