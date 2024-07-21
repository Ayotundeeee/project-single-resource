const express = require('express');
const app = express();
const cors = require('cors');
const snakesController = require('./controllers/snakesController')

//Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Welcome to the Snake Safari');
});

app.use('/snakes', snakesController);

app.get('*', (req, res) => {
    res.status(404).send("404 Page Not Found")
})

module.exports = app;