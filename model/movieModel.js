const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  
    name: { type: String, required: true },
    image: { type: String, required: true },

    summary: { type: String, required: true },
    

});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;