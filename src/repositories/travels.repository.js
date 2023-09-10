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

async function getFlights({origin, destination, bigger_date, smaller_date}){
    const array = [];
    let query = `
        SELECT flights.id, origin_city.name AS origin, destination_city.name AS destination, 
        TO_CHAR(flights.date, 'DD-MM-YYYY') FROM flights JOIN cities AS origin_city ON 
        flights.origin = origin_city.id JOIN cities AS destination_city ON flights.destination = destination_city.id
    `;

    if (origin) {
        array.push(origin);
        query += ` WHERE origin_city.name = $${array.length}`;
    }
    if (destination) {
        array.push(destination);
        if (array.length == 1){
            query += ` WHERE destination_city.name = $${array.length}`;
        } else {
            query += ` AND destination_city.name = $${array.length}`;
        }
    }
    if (bigger_date && smaller_date){
        array.push(smaller_date.split('-').reverse().join('-'), bigger_date.split('-').reverse().join('-'));
        if (array.length == 2){
            query += ` WHERE flights.date BETWEEN $${array.length-1} AND $${array.length}`
        } else {
            query += ` AND flights.date BETWEEN $${array.length-1} AND $${array.length}`
        }
    }
    const flights = await db.query(query+' ORDER BY flights.date ASC;', array);
    return flights.rows;
}

const travelsRepositories = {
    createCity,
    findCity, 
    createFlight,
    findFlight,
    createTravel, 
    getFlights
}

export default travelsRepositories;