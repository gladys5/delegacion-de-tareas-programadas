const { bcrypt } = require("bcryptjs");
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
  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  const users = await User.create({
    name,
    email,
    password: hashPassword,
  });
  users.password = undefined;
  res.status(201).json({
    status: "success",
    users,
  });
});

const logins = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate credentials (email)
  const user = await User.findOne({
    where: {
      email,
      status: "active",
    },
  });

  if (!user) {
    return next(new AppError("Email not found", 404));
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return next(new AppError("Invalid password", 400));
  }

  // Generate JWT
  // Send response
  res.status(200).json({
    status: "success",
  });
});

module.exports = {
  getUserByStatusActive,
  updateTasks,
  logins,
  createUser,
  desabiliteUser,
};
