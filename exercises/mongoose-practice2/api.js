const express = require("express");
const router = express.Router();

const Person = require("./models/Person");
const { FindCursor } = require("mongodb");

router.get("/people", function (req, res) {
	Person.find({}).then(function (people) {
		res.send(people);
	});
});

router.post("/person", function (req, res) {
	let person = {
		firstName: "adir",
		lastName: "hino",
		age: 31,
	};
	const p1 = new Person(person);
	p1.save();

	res.send("p1 added successfuly!");
});

router.put("/person/:id", function (req, res) {
	Person.findByIdAndUpdate(`${req.params.id}`, { age: 21 },{new:true}).then((p) => {
		console.log(p);
	});
	res.send("age updated successfuly!");
});

router.delete('/apocalypse',function(req,res){
    Person.db.dropCollection("people")
    res.send("person DB removed successfuly!")
})

module.exports = router;
