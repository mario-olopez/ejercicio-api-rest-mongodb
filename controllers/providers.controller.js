const Provider = require("../models/providers.model")

async function getProviders(req, res) {
    try {
        const providers = await Provider.find()
        res.status(200).json(providers);
    } catch (error){
        res.status(400).json({ error: error.message })
    }
}

async function createProvider(req, res) {
    try{
        const { company_name, CIF, address, url_web} = req.body;

        const newProvider = new Provider({
            company_name,
            CIF,
            address,
            url_web
        })

        const savedProvider = await newProvider.save();

        res.status(201).json({
            message: "proveedor creado",
            provider: savedProvider
        });
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

async function updateProvider(req, res) {
    try {
        const { id } = req.params
        const { company_name, CIF, address, url_web} = req.body;

        const updatedProvider = await Provider.findByIdAndUpdate(
            id,
            { company_name, CIF, address, url_web },
            { new: true}
        );

        if(!updatedProvider){
            res.status(404).json({ message: "Proveedor no encontrado"})
        }
        res.status(200).json({
            message: `proveedor actualizado: ${updatedProvider.company_name}`,
            provider: updatedProvider
        })
    } catch (error){
        res.status(400).json({ error: error.message})
    }
}

async function deleteProvider(req, res) {
    try{
        const { company_name } = req.body
        const providerToDelete = await Provider.findOneAndDelete({ company_name })

        if(!providerToDelete){
            res.status(404).json({ message: "Proveedor no encontrado"})
        }

        res.status(200).json({
            message: `Se ha borrado al proveedor: ${providerToDelete.company_name}`
        })
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

module.exports = { 
    getProviders,
    createProvider,
    updateProvider,
    deleteProvider
}