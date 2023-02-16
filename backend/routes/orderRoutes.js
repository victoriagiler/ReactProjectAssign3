import express from 'express'
import { getOrderById, addOrderItems, updateOrderToPaid } from '../controllers/orderController.js'
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

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router