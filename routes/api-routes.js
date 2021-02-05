const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", ({ body }, res) => {
  Workout.find({})
  .sort({ date: -1 })
  .then(dbWorkout => {
    console.log("DBWORKOUT", dbWorkout)
    res.json(dbWorkout)
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;
