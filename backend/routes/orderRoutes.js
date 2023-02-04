import express from 'express'
import { getOrderById, addOrderItems } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// @desc create a new order
// @route POST/api/orders
// @access Private

router.route('/').post(protect, addOrderItems)

// @desc get order by ID
// @route GET/api/orders/:id
// @access Private

router.route('/:id').get(protect, getOrderById)

export default router