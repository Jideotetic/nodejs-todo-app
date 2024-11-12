require("dotenv").config();
const express = require("express");
const { urlencoded } = require("express");
const session = require("express-session");
const todoRouter = require("./routes/todoRouter");

const app = express();

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// SETUP TEMPLATE ENGINE
app.set("view engine", "ejs");

// SETUP STATIC ASSETS
app.use(express.static("public"));

// PARSE REQ BODY
// app.use(express.json());
app.use(urlencoded({ extended: true }));

// SETUP ROUTING
app.use("/", todoRouter);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Server started and listening at port ${PORT}`);
});
