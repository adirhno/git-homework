/** @format */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Planet = require("./Planet");
const Solar = require("./Solar");
const Visitor = require("./Visitior");

mongoose
  .connect("mongodb://127.0.0.1:27017/solarSystem", { useNewUrlParser: true })
  .then(() => console.log("conneted to DB"))
  .catch((err) => console.log(err));

const p1 = new Planet({ name: "sun", system: {}, Visitors: [] });
const p2 = new Planet({ name: "earth", system: {}, Visitors: [] });
const v1 = new Visitor({ name: "nill", homePlanet: {}, visitedPlanets: [] });
const s1 = new Solar({ planets: [], starName: "oranos" });
const s2 = new Solar({ planets: [], starName: "shavit" });


s1.save();
s2.save();
p2.save();
p1.save();
v1.save();
p1.Visitors.push(v1);
v1.visitedPlanets.push(p2);

s1.planets.push(p2);
s2.planets.push(p1);

app.listen(3000, function () {
  console.log("Server up and running on port 3000");
});
