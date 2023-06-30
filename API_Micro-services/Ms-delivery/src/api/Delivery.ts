import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import {
  CreateDelivery,
  DeleteDelivery,
  GetAllDeliveries,
  GetDelivery,
  UpdateDelivery
} from '../modules/Delivery';
import { Delivery } from '../interfaces/Delivery';
const router = express.Router();

/**
 * Ping delivery route
 */
router.get<{}, MessageResponse>('/', (req, res) => {
  res.status(200).json({ message: 'Delivery route' });
});

/**
 * Create a delivery
 */
router.post('/create', async function (req, res, next) {
  const {orderId , restaurantId, customerEmail, delivererEmail, date, dishId, price, address , status, city, country} = req.query;

  if (!orderId || !orderId || !restaurantId || !customerEmail || !delivererEmail || !date || !address || !dishId || !price || !status || !city || !country) {
    res.status(400).json({ error: 'Missing parameters' });
  } else {
    const delivery = {
      orderId: orderId as string,
      restaurantId: restaurantId as string,
      customerEmail: customerEmail as string,
      delivererEmail: delivererEmail as string,
      date: new Date(),
      dishId: dishId as string,
      price: +price as number,
      address: address as string,
      status: status as string,
      city: city as string,
      country: country as string,
    } as Delivery;
    try {
      const newDelivery = await CreateDelivery(delivery);
      res.status(200).json({ response: newDelivery });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
});

/**
 * Delete a delivery
 */

router.delete('/delete', async function (req, res, next) {
  const { deliveryId } = req.query;

  try {
    await DeleteDelivery(deliveryId as string);
    res.status(200).json({ response: 'Delivery deleted' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * Update a delivery
 */

router.patch('/update', async function (req, res, next) {
  const {orderId , deliveryId  ,restaurantId, customerEmail, delivererEmail, date, dishId, price, address , status, city, country} = req.query;

  if (!orderId || !deliveryId || !restaurantId || !customerEmail || !delivererEmail || !date || !address || !dishId || !price || !status || !city || !country) {
    res.status(400).json({ error: 'Missing parameters' });
  } else {
    const updatedDelivery = {
      restaurantId: restaurantId as string,
      customerEmail: customerEmail as string,
      delivererEmail: delivererEmail as string,
      date: new Date(),
      dishId: dishId as string,
      price: +price as number,
      address: address as string,
      status: status as string,
      city: city as string,
      country: country as string,
    } as Delivery;
    try {
      const updateDelivery = await UpdateDelivery(deliveryId as string, updatedDelivery);
      res.status(200).json({ response: updateDelivery });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
});

/**
 * Get all deliveries from a restaurant
 */

router.get('/getAllDeliveries', async function (req, res, next) {
      const { restaurantId } = req.query;

      try {
        const getAllDeliveries = await GetAllDeliveries(restaurantId as string);
        res.status(200).json({ response: getAllDeliveries });
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }
);

/**
 * Get a delivery
 */

router.get('/get', async function (req, res, next) {
      const { deliveryId } = req.query;

      try {
        const getDelivery = await GetDelivery(deliveryId as string);
        res.status(200).json({ response: getDelivery });
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }
);

export default router;
