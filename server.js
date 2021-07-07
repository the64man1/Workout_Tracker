const path = require('path');
const express = require("express");
const logger = require("morgan");
//const mongojs = require("mongojs");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
//const databaseUrl = "workout";
//const collections = ["workouts"];
//const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static("public"));\
app.use(express.static(path.join(__dirname, 'public')));

//const db = require('./models')

//const Workout = require('./models/Workout');

//const routes = require('./controllers');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workouts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/stats.html'));
})

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/exercise.html'));
})

app.use(require('./routes/api.js'));

// app.get('/api/workouts', (req, res) => {
//     db.Workout.find({}, (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(data)
//             res.json(data)
//         }
//     })
// })

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
