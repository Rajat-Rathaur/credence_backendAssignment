const express = require('express');
const {addMovie, addMovies, getMovies, getMovie , updateMovie , deleteMovie } = require('../controller/movieController');

const movieRouter = express.Router();



movieRouter.post("/addMovies" ,addMovies);
movieRouter.post("/addMovie" ,addMovie);
movieRouter.get("/getMovies", getMovies);
movieRouter.get("/getMovie/:id", getMovie);
movieRouter.put("/updateMovie/:id", updateMovie);
movieRouter.delete("/deleteMovie/:id", deleteMovie);




module.exports = movieRouter;