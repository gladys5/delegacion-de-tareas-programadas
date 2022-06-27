const express = require("express");
const { TaskRouter } = require("./routes/tasks.routes");
const { UserRouter } = require("./routes/users.routes");
const { globalErrorHandler } = require("./controllers/error.controller");
const app = express();

app.use(express.json());

app.use("/api/v1/tasks", TaskRouter);
app.use("/api/v1/users", UserRouter);

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(globalErrorHandler);
module.exports = { app };
