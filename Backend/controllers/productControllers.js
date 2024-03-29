import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


//desc fetch all products
// route: get /api/products
// access fetch all products/public routes
const getProducts = asyncHandler(async(req,res) =>{
    const products = await Product.find({})

    res.json(products)
})
//desc fetch single product
// route: get /api/products/:id
// access fetch all products/public routes
const getProductById = asyncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }    
    else{
        res.status(404)
        throw new Error("Product not found");
    }
})

export{getProducts,getProductById}