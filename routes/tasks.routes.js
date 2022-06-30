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

router.post("/", createTask);
router.get("/", getTasksRegistrate);
router.get("/:status", getTaskBystatus);
router.patch("/:id", validationDate, updateTaskById);
router.delete("/:id", validationDate, cancelTask);

module.exports = { TaskRouter: router };
