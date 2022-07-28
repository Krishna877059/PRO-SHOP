import axios from "axios";

import {CART_ADD_ITEM} from '../constants/cartConstants'
export const addToCart =(id,qty) =>async(dispatch,getState)=>{
    console.log(id)
    const {data} = await axios.get(`/api/products/${id.id}`)
   
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.image,
            image:data.image,
            price: data.price,
            countInStock:data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItems))
}