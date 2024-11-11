window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".delete-todo");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const todoId = button.getAttribute("data-id");

      fetch(`/${todoId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          console.log(res);
          window.location.reload();
        } else {
          alert("Failed to delete the todo item");
        }
      });
      // .catch((error) => {
      //   console.error(error.message);
      // });
    });
  });
});
