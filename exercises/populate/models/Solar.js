/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SolarSystemSchema = new Schema({
  planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}],
  starName : String,
});

const Solar = mongoose.model("Solar", SolarSystemSchema);
module.exports = Solar;
