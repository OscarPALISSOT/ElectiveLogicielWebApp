// @ts-ignore
import { PrismaClient } from '@prisma/client';
import { Delivery } from '../interfaces/Delivery';

const prisma = new PrismaClient();



/**
 * Create a delivery
 * @param {Delivery} delivery the delivery to create
 */
async function CreateDelivery(delivery: Delivery) {
  return prisma.delivery.create({
    data: {
      orderId: delivery.orderId,
      restaurantId: delivery.restaurantId,
      customerEmail: delivery.customerEmail,
      delivererEmail: delivery.delivererEmail,
      dishId: delivery.dishId,
      date: delivery.date,
      price: delivery.price,
      address: delivery.address,
      city: delivery.city,
      country: delivery.country,
      status: delivery.status,
    },
  });
}

/**
 * Get a delivery
 * @param {string} deliveryId the delivery id to get
 */
async function GetDelivery(deliveryId: string) {
  return prisma.delivery.findUnique({
    where: {
      deliveryId: deliveryId,
    },
  });
}

/**
 * Get all deliveries from a Restaurant
 * @param {string} restaurantId the Restaurant id to get deliveries from
 */
async function GetAllDeliveries(restaurantId: string) {
  return prisma.delivery.findMany({
    where: {
      restaurantId: restaurantId,
    },
  });
}

/**
 * Delete a delivery
 * @param {string} deliveryId the delivery id to delete
 */
async function DeleteDelivery(deliveryId: string) {
  return prisma.delivery.delete({
    where: {
      deliveryId: deliveryId,
    },
  });
}

/**
 * Update a delivery
 * @param {string} deliveryId the delivery id to update
 * @param {Delivery} updatedDelivery the delivery to update
 */
async function UpdateDelivery(deliveryId: string, updatedDelivery: Delivery) {
  return prisma.delivery.update({
    where: {
      deliveryId: deliveryId,
    },
    data: {
      orderId: updatedDelivery.orderId,
      restaurantId: updatedDelivery.restaurantId,
      customerEmail: updatedDelivery.customerEmail,
      delivererEmail: updatedDelivery.delivererEmail,
      dishId: updatedDelivery.dishId,
      date: updatedDelivery.date,
      price: updatedDelivery.price,
      address: updatedDelivery.address,
      city: updatedDelivery.city,
      country: updatedDelivery.country,
    },
  });
}

export { CreateDelivery, GetDelivery, GetAllDeliveries, DeleteDelivery, UpdateDelivery };
