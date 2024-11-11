const { Router } = require("express");
const { getAllTodo } = require("../controllers/todoController");

const todoRouter = Router();

todoRouter.get("/", getAllTodo);
todoRouter.post("/", (req, res) => {});
todoRouter.delete("/", (req, res) => {});

module.exports = todoRouter;
