/** @format */

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/", (req, res) => {
  res.send("Server is up and running smoothly");
});

app.get("/buy/:item", (req, res) => {
  for (let i in store) {
    if (store[i].name == req.params.item) {
      res.send(
        `Congratulations, you’ve just bought ${store[i].name} for ${store[i].price}`
      );
    }
  }
});

app.get("/sale/", (req, res) => {
  console.log(req.query);
  if (req.query.admin) {
    for (let i in store) {
      if (store[i].inventory > 10) {
        store[i].price = store[i].price / 2;
      }
    }
    res.send(store);
  }
});

// app.get("/buy/:nam", (req, res) => {
//   console.log(req.params.nam);
//   for (let i in store) {
//     if (store[i].name == req.params.nam) {
//       store[i].inventory -= 1;
//       res.send(store[i]);
//     }
//   }
// });

app.get("/priceCheck/:name", (req, res) => {
  for (let i in store) {
    if (store[i].name == req.params.name) {
      console.log(store[i].price);
      res.send(store[i]);
    }
  }
});

app.listen(3000, () => {
  console.log("this server is listening to port 3000");
});
