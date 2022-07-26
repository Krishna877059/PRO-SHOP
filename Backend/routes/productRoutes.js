import  express from 'express'

import asyncHandler from 'express-async-handler'
const router =  express.Router()
import Product from '../models/productModel.js'

//desc fetch all products
// route: get /api/products
// access fetch all products/public routes
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
//    res.status(401)
  //  throw new Error('Not authorized')
    res.json(products)
}))
//desc fetch single product
// route: get /api/products/:id
// access fetch all products/public routes
router.get('/:id',asyncHandler(async (req, res) => {
   
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }    
    else{
        res.status(404)
        throw new Error("Product not found");
    }
    res.json(product)
}))
export default router