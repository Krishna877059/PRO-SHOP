import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


//desc fetch all products
// route: get /api/products
// access fetch all products/public routes
const authUser = asyncHandler(async(req,res) =>{
    const { email, password } = req.body
    res.send(email,password)
})
export { authUser}