const Task = require("../models/task");

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findOne({ where: { id } });
    if (!deletedTask) {
      res.status(404).json({ error: "Task not found" });
    } else {
      await deletedTask.destroy();
      res.json(deletedTask);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updatedRows] = await Task.update(req.body, {
      where: { id },
    });
    if (updatedRows === 1) {
      const task = await Task.findOne({ where: { id } });
      res.json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createTask, deleteTask, updateTask, getAllTasks };
