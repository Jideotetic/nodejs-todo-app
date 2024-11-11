const { Router } = require("express");
const {
  getAllTodo,
  createNewTodo,
  deleteTodo,
} = require("../controllers/todoController");

const todoRouter = Router();

todoRouter.get("/", getAllTodo);
todoRouter.post("/", createNewTodo);
todoRouter.delete("/:index", deleteTodo);

module.exports = todoRouter;
