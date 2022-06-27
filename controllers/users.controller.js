const { User } = require("../models/user.model");
const { catchAsync } = require("../utils/catchAsynck");
const { Task } = require("../models/task.model");

const getUserByStatusActive = catchAsync(async (req, res, next) => {
  const users = await User.findAll({ where: { status: "active" } });

  res.status(200).json({
    users,
  });
});

const updateTasks = catchAsync(async (req, res, next) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  await user.update({ name, email });
  res.status(201).json({
    user,
  });
});

const desabiliteUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  await user.update({ status: "cancel" });
  res.status(200).json({
    user,
    status: "success",
  });
};

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  const users = await User.create({ name, email, password });

  res.status(200).json({
    users,
  });
});

module.exports = {
  getUserByStatusActive,
  updateTasks,

  createUser,
  desabiliteUser,
};
