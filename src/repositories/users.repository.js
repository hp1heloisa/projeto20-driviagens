import { db } from "../database/database.connection.js";

async function createPassanger(firstName,lastName){
    const post = await db.query(`
        INSERT INTO passangers ("firstName", "lastName") VALUES ($1,$2) 
    `, [firstName, lastName]);
    return post.rows;
}

async function findPassanger(passangerId){
    const answer = await db.query(`
        SELECT * FROM passangers WHERE id = $1;
    `, [passangerId]);
    return answer.rows;
}

const usersRepository = {
    createPassanger,
    findPassanger
}

export default usersRepository;