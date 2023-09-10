import { db } from "../database/database.connection.js";

async function createPassenger(firstName,lastName){
    const post = await db.query(`
        INSERT INTO passengers ("firstName", "lastName") VALUES ($1,$2) 
    `, [firstName, lastName]);
    return post.rows;
}

async function findPassenger(passengerId){
    const answer = await db.query(`
        SELECT * FROM passengers WHERE id = $1;
    `, [passengerId]);
    return answer.rows;
}

async function getPassengersFlights(name) {
    const array = []
    let query = `
        SELECT passengers."firstName" || ' ' || passengers."lastName" as passenger, COUNT(travels."passengerId") 
        as travels FROM travels JOIN passengers ON passengers.id = travels."passengerId"
    `
    if (name) {
        array.push(`%${name}%`);
        query += ` WHERE  passengers."firstName" || ' ' || passengers."lastName" LIKE $1`;
    }
    const answer = await db.query(
        query+` GROUP BY passengers.id ORDER BY travels DESC`
    , array);
    return answer.rows;
}

const usersRepository = {
    createPassenger,
    findPassenger,
    getPassengersFlights
}

export default usersRepository;