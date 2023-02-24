const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use("/static", express.static("public"));

const port = process.env.port || 3000;

const corsOptions = {
  origin: "http://localhost:4000",
  optionsSuccessStatus: 200,
};

app.get("/", cors(corsOptions), (req, res, next) => {
  const data = JSON.stringify("Hello world");
  res.set("Content-type", "text/json");
  res.send(data);
  next();
});

app.get("/users", cors(corsOptions), (req, res) => {
  const users = fs.readFileSync("./users.json");

  res.set("Content-type", "application/json");
  res.send(users);
});

// app.get("/", cors(corsOptions), (req, res) => {
//   if (req.url = '/kitty') {
//     res.set("Content-type", "image/jpg");
//     const data = JSON.stringify("Hello world");
//     res.send(data);
//   }
// });

app.post("/user/:id", cors(corsOptions), (req, res) => {
  res.set("Content-type", "text/json");
  const user = users.some(user => user.id === req.params.id)
  res.set("Content-type", "application/json");
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
