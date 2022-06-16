const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

const corsOptions = {
  origin: "http://192.168.108.87:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require("./routes/auth");

app.get("/", (req, res) => {
  res.send("Successful response.");
});
app.use("/auth", authRouter);

/* Starting Server */
app.listen(5000, () => console.log("Example app is listening on port 5000."));

/* Connecting DB */
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("mongodb connected successfully");
  })
  .catch((error) => {
    console.error("mongodb connection failed");
  });
