const todos = [];

async function getAllTodo(req, res) {
  res.render("todo", { todos, error: undefined });
}

async function createNewTodo(req, res) {
  const newTodo = req.body;
  todos.push(newTodo);
  res.redirect("/");
}

async function deleteTodo(req, res) {
  try {
    const todoId = req.params.todoId;
    if (todoId >= 0 && todoId < todos.length) {
      todos.splice(todoId, 1);
      return res.status(200).json({ msg: "Todo deleted successfully" });
    } else {
      res.status(404).json({ err: "Todo not found" });
    }
  } catch (error) {
    console.error("Delete error", "======>", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

module.exports = { getAllTodo, createNewTodo, deleteTodo };
