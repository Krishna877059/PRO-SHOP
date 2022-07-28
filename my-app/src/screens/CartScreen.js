import React,{useEffect} from 'react'
import { Link ,useLocation, useParams} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { Row,Col,Image,Button,Card,ListGroup,Form } from 'react-bootstrap'
import Message  from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
  const productId=useParams()
 const location = useLocation()
 const qty = location.search ? Number(location.search.split('=')[1]):1
 const dispatch = useDispatch()
 const cart = useSelector(state => state.cart)
 const {cartItems} = cart
 
 useEffect(()=>{
  if(productId){
    dispatch(addToCart(productId,qty))
  }
 },[dispatch,productId,qty])

  return (
    <h1>cart</h1>
  )
}

export default CartScreen