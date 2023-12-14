/** @format */

const express = require("express");
const { cpSync } = require("fs");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));

const data = {
  8112: {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
  },
  9121: {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  1081: {
    title: "The Giver",
    author: "Lois Lowry",
  },
};

app.get("/book/:bookId", function (req, res) {
  res.send(data[req.params.bookId]);
});

app.listen(3000, function () {
  console.log("you are listening to port 3000");
});
