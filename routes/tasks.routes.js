const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasksRegistrate,
  getTaskBystatus,
  updateTaskById,
  cancelTask,
} = require("../controllers/tasks.controller");

router.post("/", createTask);
router.get("/", getTasksRegistrate);
router.get("/:status", getTaskBystatus);
router.patch("/:id", updateTaskById);
router.delete("/:id", cancelTask);

module.exports = { TaskRouter: router };
