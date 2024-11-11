window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".delete-todo");

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        const todoId = button.getAttribute("data-id");

        const response = await fetch(`/${todoId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          alert(errorData.error);
        } else {
          const data = await response.json();
          alert(data.msg);
          location.reload();
        }
      } catch (error) {
        console.error("Error", "======>", error.message);
        alert("There was an error processing your request.");
      }
    });
  });
});
