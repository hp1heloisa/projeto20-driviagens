import { db } from "../database/database.connection.js";

async function createCity(name) {
    const answer = await db.query(`
        INSERT INTO cities (name) VALUES ($1)
    `, [name]);
    return answer.rows;
}

async function findCity(dado) {
    const answer = await db.query(`
        SELECT * FROM cities WHERE name = $1 OR id = $2;
    `, [dado, dado]);
    return answer.rows;
}

async function createFlight(origin, destination, date){
    const answer = await db.query(`
        INSERT INTO flights (origin, destination, date) VALUES ($1,$2,$3);
    `, [origin, destination, date]);
    return answer.rows;
}

async function findFlight(flightId){
    const answer = await db.query(`
        SELECT * FROM flights WHERE id = $1;
    `, [flightId]);
    return answer.rows;
}

async function createTravel(passengerId, flightId){
    const answer = await db.query(`
        INSERT INTO travels ("passengerId", "flightId") VALUES ($1,$2);
    `, [passengerId, flightId]);
    return answer.rows;
}

const travelsRepositories = {
    createCity,
    findCity, 
    createFlight,
    findFlight,
    createTravel
}

export default travelsRepositories;