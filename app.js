require("dotenv").config();
const express = require("express");
const { urlencoded } = require("express");
const todoRouter = require("./routes/todoRouter");

const app = express();

// SETUP TEMPLATE ENGINE
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// SETUP STATIC ASSETS
app.use(express.static("public"));

// PARSE REQ BODY
app.use(urlencoded({ extended: true }));

// SETUP ROUTING
app.use("/", todoRouter);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Server started and listening at port ${PORT}`);
});
