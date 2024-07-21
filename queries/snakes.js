const db = require('../db/dbconfig');

const getAllSnakes = async() => {
    try {
        const allSnakes = await db.any("SELECT * FROM snakes");
        return allSnakes
    }catch (error){
        return error;
    }
}

const getSnake = async(id) => {
    try {
        const targetSnake = await db.one("SELECT * FROM snakes WHERE id=$1", id);
        return targetSnake;
    }catch (error){
        return error;
    }
}

const createSnake = async(snake) => {
    try{
        const newSnake = await db.one(
            "INSERT INTO snakes(name, scientific_name, diet, habitats, average_length, venomous) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [snake.name, snake.scientific_name, snake.diet, snake.habitats, snake.average_length, snake.venomous]
        );
    } catch (error){
        throw error
    }
}

const updateSnake = async(id, snake) => {
    try{
        const targetSnake = await db.one("UPDATE snakes SET name=$2, scientific_name=$3, diet=$4, habitats=$5, average_length=$6, venomous=$7 WHERE id=$1 RETURNING *", [id, snake.name, snake.scientific_name, snake.diet, snake.habitats, snake.average_length, snake.venomous]);
        return targetSnake;
    } catch(error){
        throw error;
    }
}

const deleteSnake = async(id) => {
    try{
    const targetSnake = await db.one("DELETE FROM snakes WHERE id=$1 RETURNING *", id);
    return targetSnake;
    } catch(error) {
        throw error;
    }
}

module.exports = { getAllSnakes, getSnake, createSnake, updateSnake, deleteSnake }