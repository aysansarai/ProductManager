const { Person } = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createPerson = (request, response) => {
    const { title, price, description } = request.body;
    Person.create({
        title,
        price,
        description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Person.findByIdAndUpdate(request.params.id, request.body, {new: true, runValidators: true})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Person.findByIdAndDelete(request.params.id)
        .then(person => response.json(person))
        .catch(err => response.json(err))
}


