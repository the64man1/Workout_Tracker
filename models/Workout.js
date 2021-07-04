const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        // {
        //     type: String,
        //     name: String,
        //     weight: Number,
        //     reps: Number,
        //     sets: Number,
        // }
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
        // {
        //     type: Schema.Types.ObjectId,
        //     ref: "Exercise"
        // }
    ]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;