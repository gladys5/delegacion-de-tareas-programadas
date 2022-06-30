const { Task } = require("../models/task.model");
//const { AppError } = require("../utils/AppError");

const validationDate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findOne({ where: { id, status: "active" } });
    if (!tasks) {
      return res.status(404).json({ message: "Task not found" });
      // return next(new AppError("Task not found!", 404));
    }

    req.tasks = tasks;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = { validationDate };
