DROP DATABASE IF EXISTS snakes_dev;
CREATE DATABASE snakes_dev;

\c snakes_dev;

CREATE TABLE snakes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    scientific_name TEXT NOT NULL,
    diet TEXT,
    habitats VARCHAR[],
    average_length FLOAT,
    venomous BOOLEAN,
    image_url TEXT
);