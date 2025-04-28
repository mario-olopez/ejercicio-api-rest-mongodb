//Conexión a MongoDB
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/ejercicio-products-providers')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


module.exports = mongoose;