const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const exerciseSchema = new Schema({ 
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number });

const workoutSchema = new Schema ({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: [exerciseSchema],
    default: undefined
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;