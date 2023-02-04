import asynchHandler from 'express-async-handler'
import Order from '../models/orderModel'


const addOrderItems = asynchHandler(async(req, res) =>{
  const{
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,

  } = req.body

  if(orderItems && orderItems.length === 0){
    res.status(400)
    throw new Error('No Order Items')
  }else{
    const order = new Order({
      orderItems,
      user: req_user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,

    })

    
    const createdOrder = await order.save()
    res.status(201).json(createdOrder)

  }


})

const getOrderById = asynchHandler(async(req, res)=>{
  const order = await Order.findById(req.params.id).populate('user', 'name email')

  if(order){
    res.json(order)
  }else{
    res.status(404)
    throw new Error('Order Not Found')
  }
})

export {addOrderItems, getOrderById}