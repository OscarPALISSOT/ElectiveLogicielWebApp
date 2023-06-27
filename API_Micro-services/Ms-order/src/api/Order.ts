import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import {
  CreateOrder,
  DeleteOrder,
  GetAllOrders,
  GetOrder,
  UpdateOrder
} from '../modules/Order';
import { Order } from '../interfaces/Order';
const router = express.Router();

/**
 * Ping order route
 */
router.get<{}, MessageResponse>('/', (req, res) => {
  res.status(200).json({ message: 'Order route' });
});

/**
 * Create an order
 */
router.post('/create', async function (req, res, next) {
  const {restaurantId, customerEmail, delivererEmail, date, menuId, dishId } = req.query;

  if (!restaurantId || !customerEmail || !delivererEmail || !date || !menuId || !dishId) {
    res.status(400).json({ error: 'Missing parameters' });
  } else {
    const order = {
      restaurantId: restaurantId as string,
      customerEmail: customerEmail as string,
      delivererEmail: delivererEmail as string,
      date: new Date(),
      menuId: menuId as string,
      dishId: dishId as string,
    } as Order;
    try {
      const newOrder = await CreateOrder(order);
      res.status(200).json({ response: newOrder });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
});

/**
 * Delete an order
 */

router.delete('/delete', async function (req, res, next) {
  const { orderId } = req.query;

  try {
    await DeleteOrder(orderId as string);
    res.status(200).json({ response: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * Update an order
 */

router.patch('/update', async function (req, res, next) {
  const { orderId, restaurantId, customerEmail, delivererEmail, date, menuId, dishId } = req.query;

  if (!orderId || !restaurantId || !customerEmail || !delivererEmail || !date || !menuId || !dishId) {
    res.status(400).json({ error: 'Missing parameters' });
  } else {
    const updatedOrder = {
      restaurantId: restaurantId as string,
      customerEmail: customerEmail as string,
      delivererEmail: delivererEmail as string,
      date: new Date(),
      menuId: menuId as string,
      dishId: dishId as string,
    } as Order;
    try {
      const updateOrder = await UpdateOrder(orderId as string, updatedOrder);
      res.status(200).json({ response: updateOrder });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
});

/**
 * Get all orders from a restaurant
 */

router.get('/getAllOrders', async function (req, res, next) {
      const { restaurantId } = req.query;

      try {
        const getAllOrders = await GetAllOrders(restaurantId as string);
        res.status(200).json({ response: getAllOrders });
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }
);

/**
 * Get an order
 */

router.get('/get', async function (req, res, next) {
      const { orderId } = req.query;

      try {
        const getOrder = await GetOrder(orderId as string);
        res.status(200).json({ response: getOrder });
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }
);

export default router;
