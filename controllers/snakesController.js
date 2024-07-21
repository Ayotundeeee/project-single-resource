const express = require('express');
const snakes = express.Router();
const { getAllSnakes, getSnake, createSnake, updateSnake, deleteSnake } = require('../queries/snakes')

snakes.get("/", async(req, res) => {
    const allSnakes = await getAllSnakes();
    if(allSnakes[0]){
        res.json(allSnakes);
    } else {
        res.status(500).json({ error: "server error"})
    }
});

snakes.get("/:id", async(req, res) => {
    const { id } = req.params
    const targetSnake = await getSnake(id)
    if(targetSnake){
        res.json(targetSnake)
    } else {
        res.status(404).json({ error: "Not Found"})
    }
})

snakes.post("/", async(req, res) => {
    const body = await createSnake(req.body);
    res.json(body);
})

snakes.put("/:id", async(req, res) => {
    const { id } = req.params;
    const snake = req.body
    const updatedSnake = await updateSnake(id, snake);
    if(updatedSnake.id){
        res.json(updatedSnake);
    } else {
        res.status(404).json({ error: "404 Snake not Found"})
    }
})

snakes.delete("/:id", async(req, res) => {
    const { id } = req.params;
    const targetSnake = await deleteSnake(id);
    if(targetSnake){
        res.status(200).json({message: `${targetSnake.name} successfully deleted`})
    } else {
        res.status(404).json({error: "Snake not found"})
    }
})


module.exports = snakes;