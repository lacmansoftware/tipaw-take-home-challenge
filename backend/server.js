const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/tipaw_challenge";
const FRONTEND_ENDPOINT = process.env.FRONTEND_ENDPOINT || "http://localhost:3000"
const PORT = process.env.PORT || 5000;

const app = express();

const corsOptions = {
  origin: FRONTEND_ENDPOINT,
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
app.listen(PORT, () => console.log(`Example app is listening on port ${PORT}.`));

/* Connecting DB */
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("mongodb connected successfully");
  })
  .catch((error) => {
    console.error("mongodb connection failed");
  });
