const mongoose = require('mongoose');

const Review = mongoose.model('review',{
    title: String,
    description: String,
    rating: Number,
    movieTitle: String
});

module.exports = Review;