const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    // type: {
    //     type: String
    // },
    // name: {
    //     type: String
    // },
    // duration: {
    //     type: Number
    // },
    // weight: {
    //     type: Number
    // },
    // reps: {
    //     type: Number
    // },
    // sets: {
    //     type: Number
    // }
    type: String,
    name: String,
    duration: String,
    weight: Number,
    reps: Number,
    sets: Number
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;