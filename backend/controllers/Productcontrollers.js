const Products = require('../models/Productmodel')
const mongoose = require('mongoose')

//getv all product
const getallProduct = async(req,res) => {
    const product = await Products.find({}).sort({createdAt:-1})

    res.status(200).json(product)
}



//get single product
const getProduct = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such product'})
    }

    const product = await Products.findById(id)
    
    if (!product){
        return res.status(404).json({error:'no such product'})
    }
    res.status(200).json(product)
}



//create new product
const createProduct = async (req,res) => {
    const { name,description,category,quantity,price} = req.body
    let emptyFields = []

    if (!name) {
        emptyFields.push('name')
    }
    if (!description) {
        emptyFields.push('description')
    }
    if (!category) {
        emptyFields.push('category')
    }
    if (!quantity) {
        emptyFields.push('quantity')
    }
    if (!price) {
        emptyFields.push('price')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    try{
        const product = await Products.create({name,description,category,quantity,price})
        res.status(200).json(product)
    } catch (error){
        res.status(400).json({error:error.message})
         
    }

}

//delete a product
const deleteProduct = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such product'})
    }

    const product = await Products.findOneAndDelete({_id: id})
    if (!product){
        return res.status(404).json({error:'no such product'})
    }
    res.status(200).json(product)
}

//update a product
const updateProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such workout'})
    }
    const product = await Products
    .findOneAndUpdate({_id: id}, {$set:
        req.body},{ new: true },
    )
    .then(console.log(req.body))
    .then((result) => {
        
        res.json({
            data:result,
            msg:'data successfully updated'
        });
    })
    .catch((err)=>{
        console.log(err);
    });
}  



module.exports = {
    createProduct,
    getProduct,
    getallProduct,
    deleteProduct,
    updateProduct
}