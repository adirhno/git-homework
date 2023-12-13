/** @format */

const express = require("express");
const app = express();

app.get("/user/:userName", (req, res) => {
  const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible",
  };

  res.send(`welcome ${users[req.params.userName]}`);
});

app.get("/life", (req, res) => {
  res.send("42");
});

app.listen(3000, function () {
  console.log("you are listening to port 3000");
});
