var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema ({
  rating: {type: Number, required: [true, "Enter a rating"], min: [1, "Rating cannot be less than 1"], max: [5, "Rating cannot be greater than 5"]},
  comment: {type: String},
}, {timestamps: true});

mongoose.model("Rating", RatingSchema);

var CakeSchema = new mongoose.Schema({
  title: {type: String, required: [true, "Enter a title"]},
  url: {type: String, required: [true, "Enter a image url"]},
  ratings: [RatingSchema],
}, {timestamps: true});

mongoose.model("Cake", CakeSchema);
