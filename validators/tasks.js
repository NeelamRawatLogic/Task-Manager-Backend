const Task = require("../models/task");

const validateTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const task = await Task.build({ title, description });
    await task.validate();

    next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { validateTask };
