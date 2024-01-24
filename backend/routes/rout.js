const express = require('express')
const router = express.Router()
const Products = require('../models/Productmodel')
const {createProduct,getProduct,
    getallProduct,updateProduct,deleteProduct} = require('../controllers/Productcontrollers')

router.get('/', getallProduct)

router.get('/:id',getProduct)

router.post('/',createProduct)

router.delete('/:id',deleteProduct)

router.patch('/:id',updateProduct)

module.exports = router