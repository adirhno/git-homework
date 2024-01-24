const fetchData = async function  (surname) {
    let person = await Person.find({ lastName: surname }) 
    console.log(person)
}