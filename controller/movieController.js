const Movie = require('../model/movieModel');
const mongoose = require('mongoose');

exports.addMovie = async (req, res) => {
  try {
    const { name, image, summary } = req.body;

    const newMovie = new Movie({
      name,
      image,
      summary
    });

    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add movie' });
  }
};

exports.addMovies = async (req, res) => {
    try {
      const moviesData = req.body;
  
      const newMovies = moviesData.map(movieData => new Movie({
        name: movieData.name,
        image: movieData.image,
        summary: movieData.summary
      }));
  
      const savedMovies = await Movie.insertMany(newMovies);
      res.status(201).json(savedMovies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add movies' });
    }
  };
  
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve movies' });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movieId = req.params.id;

    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve movie' });
  }
};

exports.updateMovie = async (req, res) => {
    try {
      const movieId = req.params.id;
      const updateData = req.body;
  
      const movie = await Movie.findById(movieId);
  
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
  
      
      if (updateData.name) {
        movie.name = updateData.name;
      }
      if (updateData.image) {
        movie.image = updateData.image;
      }
      if (updateData.summary) {
        movie.summary = updateData.summary;
      }
  
      const updatedMovie = await movie.save();
  
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update movie' });
    }
  };
  

exports.deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;

    const deletedMovie = await Movie.findByIdAndDelete(movieId);

    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete movie' });
  }
};
