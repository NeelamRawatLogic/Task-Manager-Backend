require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");
const { syncDatabase } = require("./config/database");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/tasks", tasksRouter);

syncDatabase();

const port = process.env.PORT || 3000; // Use environment variable or default to 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
