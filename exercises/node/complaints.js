/** @format */
const handleComplaint = require("./complaintsHandler");
const types = require("./consts");

let complaint1 = {
  text: "I'm not getting enough money",
  type: types.FINANCE,
};

let complaint2 = {
  text: "My salary hasn't come in yet",
  type: types.FINANCE,
};

let complaint3 = {
  text: "I'm always full of energy",
  type: types.EMOTIONS,
};
handleComplaint.handleComplaint(complaint1); //should print " ."
handleComplaint.handleComplaint(complaint2); //should print "Money doesn't grow on trees, you know."
handleComplaint.handleComplaint(complaint3); //should print "It'll pass, as all things do, with time."
