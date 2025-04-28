const express = require("express")
const mongoose = require("./config/db_mongo")
const morgan = require("./middlewares/morgan") 

const app = express();
const port = 3000;

//Middlewares
app.use(morgan("dev"))
app.use(express.json())

//Loger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

//Rutas 
const productsRoutes = require('./routes/products.routes');
const providersRoutes = require('./routes/providers.routes');

//Uso de las rutas
app.use("/api/products", productsRoutes);
app.use("/api/providers", providersRoutes)

//Ruta de prueba
app.get("/", (req, res) => {
    res.send(`Servidor funcionando en ${port}`)
})

//Arrancamos el servidor
app.listen(port, () => {
    console.log(`Servidor arrancado en http://localhost:${port}`)
})