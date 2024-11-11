const todos = [];

async function getAllTodo(req, res) {
  res.render("todo", { todos, error: undefined });
}

async function createNewTodo(req, res) {
  try {
    if (!req.body.item) {
      return res.status(400).render("todo", {
        todos,
        error: "Item title is required",
      });
    }

    const newTodo = req.body;
    todos.push(newTodo);

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
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
