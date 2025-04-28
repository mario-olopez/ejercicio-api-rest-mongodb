const mongoose = require('mongoose');
require('../config/db_mongo')

const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true 
    },
    CIF: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    url_web: {
        type: String,
        required: true,
        validate: {
            validator: function(url){
                if(url.indexOf('http') != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "Por favor, introduce una URL válida"
        }
    }
}

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;