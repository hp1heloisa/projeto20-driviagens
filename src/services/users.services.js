import usersRepository from "../repositories/users.repository.js";

async function createPassanger(firstName, lastName) {
    const answer = await usersRepository.createPassanger(firstName, lastName);
    return answer;
}

const usersServices = {
    createPassanger
}

export default usersServices;