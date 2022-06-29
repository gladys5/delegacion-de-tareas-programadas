const { Task } = require("../models/task.model");
const validationDate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findOne({ where: { id, status: "active" } });
    if (!tasks) {
      return next(new AppError("Task not found!", 404));
    }

    req.tasks = tasks;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = { validationDate };
