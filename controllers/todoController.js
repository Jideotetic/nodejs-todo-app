const todos = [];

async function getAllTodo(req, res) {
  res.render("todo", { todos });
}

async function createNewTodo(req, res) {
  todos.push(req.body);
  res.redirect("/");
}

async function deleteTodo(req, res) {
  const todoId = req.params.index;
  if (todoId >= 0 && todoId < todos.length) {
    todos.splice(todoId, 1);
    res.status(200).json({ msg: "Todo deleted successfully" });
  } else {
    res.status(404).json({ err: "Todo not found" });
  }
}

module.exports = { getAllTodo, createNewTodo, deleteTodo };
