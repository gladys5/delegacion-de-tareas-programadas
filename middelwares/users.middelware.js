const { User } = require("../models/user.model");

// Utils
const { AppError } = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsynck");

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  req.user = user;
  next();
});
module.exports = { userExists };
