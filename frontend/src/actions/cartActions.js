import axios from 'axios'


import { CART_REMOVE_ITEM, CART_ADD_ITEM } from '../constants/cartConstants'

export const addToCart = (id, qty) => async(dispatch, getState)=>{
 const {data} = await axios.get(`/api/events/${id}`)
 dispatch({
  type:CART_ADD_ITEM,
  payload:{
    event: data._id,
    title: data.title,
    image: data.image,
    price: data.price,
    countInStack: data.countInStack,
    qty
  }
 })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const removeFromCart =(id) => (dispatch, getState) =>{
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}