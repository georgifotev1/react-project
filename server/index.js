const express = require("express");
const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/react-project";

async function start() {
  await mongoose.connect(connectionString);
  console.log("Database connected");
  const app = express();

  app.get("/", (req, res) => {
    res.json({ message: "REST service operational" });
  });
  app.listen(3030, () => console.log("REST service started"));
}

start();
