require("dotenv").config();
const morgan = require("morgan");
const express = require("express");

const UserRouter = require("./routes/user.router");

const HTTP_PORT = process.env.HTTP_PORT || 3000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", UserRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to SocialCode" });
});

app.listen(HTTP_PORT, () => {
  console.log(`Aplicação rodando ${HTTP_PORT}`);
});