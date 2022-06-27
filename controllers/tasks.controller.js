const { User } = require("../models/user.model");
const { Task } = require("../models/task.model");

const createTask = async (req, res) => {
  const { title, limitDate, userId } = req.body;

  const task = await Task.create({ title, limitDate, userId });

  res.status(200).json({ task });
};
const getTasksRegistrate = async (req, res) => {
  const task = await Task.findAll();
  res.status(200).json({ task });
};
const getTaskBystatus = async (req, res) => {
  const task = await Task.findAll({
    include: [{ model: User }],
  });

  res.status(200).json({ task });
};
const updateTaskById = async (req, res) => {
  debugger;
  const { finishDate } = req.body;
  const { id } = req.params;

  const task = await Task.findOne({
    where: { id },
  });

  task.update({ finishDate });

  res.status(201).json({ task });
  if (finishDate > limitDate) {
    task.update({ status: "late" });
  } else {
    task.update({ status: "completed" });
  }
  console.log(task);
};
const cancelTask = async (req, res) => {
  const { id } = req.body;
  const task = await Task.findOne({ id });
  task.update({ status: "cancelled" });
  res.status(200).json({ task });
};
module.exports = {
  createTask,
  getTasksRegistrate,
  getTaskBystatus,
  updateTaskById,
  cancelTask,
};
