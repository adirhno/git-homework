/** @format */

const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

wordCounter = {};

app.get("/word/:word", (req, res) => {
  const word = req.params.word;
  if (wordCounter[word]) {
    res.send({ count: wordCounter[word] });
  } else {
    res.send({ count: 0 });
  }
});

app.post("/word/:word", (req, res) => {
  const word = req.params.word.toLowerCase();
  if (wordCounter[word]) {
    wordCounter[word]++;
  } else {
    wordCounter[word] = 1;
  }
  res.send({ text: `Added ${word}`, currentCount: wordCounter[word] });
});

app.get("/popular", (req, res) => {
  let popularWord = "";
  let wordCount = 0;
  for (let i of Object.keys(wordCounter)) {
    console.log("dsdsds" + wordCounter[i]);
    if (wordCounter[i] > wordCount) {
      wordCount = wordCounter[i];
      popularWord = i;
    }
  }
  console.log(popularWord);
  res.send({ text: popularWord, count: wordCount });
});

app.post("/word/", (req, res) => {
  let sentence = req.body;
  let namea = "";
  for (let i in sentence) {
    namea = sentence[i].name.toLowerCase();
    console.log(namea);
    if (wordCounter[namea]) {
      wordCounter[namea]++;
    } else {
      wordCounter[req.body[i].name.toLowerCase()] = 1;
    }
  }
  console.log(wordCounter);
  res.send(wordCounter);
});

app.delete("/word/:word", (req, res) => {
  delete wordCounter[req.params.word];
  res.send(wordCounter);
});

app.get("/sanity", (req, res) => {
  res.send("Server is up and running");
});

const port = 1112; //because why not
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
