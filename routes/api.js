const router = require("express").Router();
const db = require('../models');
const Workout = require("../models/Workout");

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration'} ,
            }
        }
    ])
    //Workout.find({ $exp: { $addFields: { totalDuration: { $sum: '$duration'}}}})
    //db.Workout.find({})
      //.populate('exercises')
      .then(dbWorkout => {
          res.json(dbWorkout)
      })
      .catch(err => {
          res.json(err)
      })
})

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration'} ,
            }
        }
    ]).sort({ _id: -1 }).limit(7)
      .then(dbWorkout => {
          res.json(dbWorkout)
      })
      .catch(err => {
          res.json(err)
      })
})

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
          res.json(dbWorkout)
      })
      .catch(err => {
          res.json(err)
      })
})

router.put('/api/workouts/:id', (req, res) => {
    const id = req.params.id;
    //console.log(req.body)
    const body = req.body;
    
    Workout.findByIdAndUpdate(id, { $push: { exercises: body } }, { new: true })
      .then(dbWorkout => {
          res.json(dbWorkout)
      })
      .catch(err => {
          res.json(err)
      })
})

module.exports = router;