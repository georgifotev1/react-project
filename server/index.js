const express = require("express");
const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/react-project";
const cors = require("./middlewares/cors");
const trimBody = require("./middlewares/trim");
const session = require("./middlewares/session");
const authController = require("./controllers/authController");

async function start() {
  await mongoose.connect(connectionString);
  console.log("Database connected");
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(trimBody());
  app.use(session());

  app.get("/", (req, res) => {
    res.json({ message: "REST service operational" });
  });
  app.use("/auth", authController);

  app.listen(3030, () => console.log("REST service started"));
}

start();
