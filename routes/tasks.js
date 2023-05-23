const express = require("express");
const router = express.Router();
const {
  createTask,
  deleteTask,
  updateTask,
  getAllTasks,
} = require("../controllers/tasks");
const { validateTask } = require("../validators/tasks");

router.get("/", getAllTasks);

router.post("/", validateTask, createTask);

router.put("/:id", validateTask, updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
