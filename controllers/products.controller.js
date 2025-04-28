const Product = require("../models/products.model");
const Provider = require("../models/providers.model");

async function createProduct(req, res) {
    try {
        const { title, price, description, provider } = req.body;

        const foundProvider = await Provider.findById(provider);
        if (!foundProvider) {
            return res.status(400).json({ message: "Proveedor no encontrado" });
        }

        const newProduct = new Product({
            title,
            price,
            description,
            provider
        });

        const result = await newProduct.save(); 
        res.status(201).json(result); //
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getAllProducts(req, res){
    try {
        const products = await Product.find().populate("provider");

        if(products.lenght === 0){
            res.status(404).json({ message: "No se encontraron los productos"})
        }
        res.status(200).json(products)
    } catch(error){
        res.status(500).json({ error: error.message})
    }
}

async function updateProduct(req, res){
    try {
        const { id } = req.params //pasamos el id como parámetro en la url
        const { title, price, description, provider } = req.body //nuevos datos del producto en el body

        const updatedProduct = await Product.findByIDAndUpdate(
            id,
            { title, price, description, provider },
            { new: true} //devolvemos el documento actualizado
        );

        if(!updatedProduct){
            res.status(404).json({ message: "Producto no encontrado"})
        }
        res.status(200).json({
            message: `Producto actualizado: ${updatedProduct.title}`,
            product: updatedProduct
        })
    } catch (error){
        res.status(500).json({ error: error.message })
    }
}

async function deleteProduct(req, res) {
    try{
        const { title } = req.body
        const deletedProduct = await Product.findOneAndDelete({ title })

        if(!deletedProduct){
            res.status(404).json({ message: "Producto no encontrado"})
        }

        res.status(200).json({
            message: `Se ha borrado el producto : ${deletedProduct.title}`
        })
    } catch(error){
        res.status(500).json({ error: error.message })
    }
}

module.exports = { 
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct 
};