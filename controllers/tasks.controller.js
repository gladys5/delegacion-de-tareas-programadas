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
  const { status } = req.params;
  const task = await Task.findAll({
    where: { status },
    include: User,
  });

  res.status(200).json({ task });
};
const updateTaskById = async (req, res) => {
  const { tasks } = req;

  const date = Date.now() - tasks.limitDate;

  if (date <= 0) {
    await tasks.update({ finishDate: Date(), status: "completed" });
  } else {
    await tasks.update({ finishDate: Date(), status: "late" });
  }

  res.status(201).json({ tasks });
};
const cancelTask = async (req, res) => {
  const { tasks } = req;
  await tasks.update({ status: "cancelled" });
  res.status(200).json({ status: "deleted" });
};
module.exports = {
  createTask,
  getTasksRegistrate,
  getTaskBystatus,
  updateTaskById,
  cancelTask,
};
