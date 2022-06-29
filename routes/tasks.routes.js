const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasksRegistrate,
  getTaskBystatus,
  updateTaskById,
  cancelTask,
} = require("../controllers/tasks.controller");
const { validationDate } = require("../middelwares/validationDate.midellware");

router.post("/", createTask, validationDate);
router.get("/", getTasksRegistrate);
router.get("/:status/", getTaskBystatus);
router.patch("/:id", updateTaskById, validationDate);
router.delete("/:id", validationDate, cancelTask);

module.exports = { TaskRouter: router };
