const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const workoutRoutes = require("./routes/workouts");
const activityLogRoutes = require("./routes/activityLog");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/activity-log", activityLogRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(5000, () => console.log("Server running on port 5000"))
  )
  .catch((error) => console.log(error));
