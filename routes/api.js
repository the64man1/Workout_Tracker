const router = require("express").Router();
const Workout = require("../models/Workout");

router.get('/api/workouts', (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
          res.json(dbWorkout)
      })
      .catch(err => {
          res.json(err)
      })
})

router.get('/api/workouts/range', (req, res) => {
    Workout.find().sort({ _id: -1 }).limit(7)
      .then(dbWorkout => {
          res.json(dbWorkout)
      })
      .catch(err => {
          res.json(err)
      })
})

// router.get('/api/workouts', (req, res) => {
//     Workout.find({})
//       .then(dbWorkout => {
//           res.json(dbWorkout)
//       })
//       .catch(err => {
//           res.json(err)
//       })
// })

module.exports = router;