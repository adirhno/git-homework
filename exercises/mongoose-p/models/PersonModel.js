const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
	hair: { type: String, required: true },
	eyes: String,
	weight: Number,
    height:Number,
	salary: Number,
	numKids: Number,
	kids: Array,
});

const Person = mongoose.model("person", personSchema);
module.exports = Person;
