const router = require('express').Router();
const mongojs = require("mongojs");
const databaseUrl = "workout";
const collections = ["workouts"];
const db = mongojs(databaseUrl, collections);
const Workout = require('../../models/Workout');

router.get('/', (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})

module.exports = router;