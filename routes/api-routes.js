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

// Route for updating an exercise...?
router.put("/api/workouts/:id", ({ body }, res) => {

});

// Route for posting/creating new workout
router.post("/api/workouts", ({ body }, res) => {

});

router.get("/api/workouts/range", ({ body }, res) => {

});

module.exports = router;
