const PersonController = require('../controllers/person.controller');
module.exports = function (app) {
    app.get('/api', PersonController.index);
    app.post('/api/products', PersonController.createPerson);
    app.get('/api/products', PersonController.getAllPeople);
    app.get('/api/products/:id', PersonController.getPerson);
    app.put('/api/products/:id', PersonController.updateProduct);
    app.delete('/api/products/:id', PersonController.deleteProduct);


}

