import {PrismaClient} from '@prisma/client';
import {Order} from '../interfaces/Order';

const prisma = new PrismaClient();


/**
 * Create an order
 * @param {Order} order the order to create
 */
async function CreateOrder(order: Order) {
    return prisma.order.create({
        data: {
            restaurantId: order.restaurantId,
            customerEmail: order.customerEmail,
            delivererEmail: order.delivererEmail,
            date: order.date,
            menuId: order.menuId,
            dishId: order.dishId,
        },
    });
}

/**
 * Get an order
 * @param {string} orderId the order id to get
 */

async function GetOrder(orderId: string) {
    return prisma.order.findUnique({
        where: {
            orderId: orderId,
        },
    });
}

/**
 * Get all orders from a Restaurant
 * @param {string} restaurantId the Restaurant id to get orders from
 */

async function GetAllOrders(restaurantId: string) {
    return prisma.order.findMany({
        where: {
            restaurantId: restaurantId,
        },
    });
}

/**
 * Delete an order
 * @param {string} orderId the order id to delete
 */

async function DeleteOrder(orderId: string) {
    return prisma.order.delete({
        where: {
            orderId: orderId,
        },
    });
}

/**
 * Update an order
 * @param {string} orderId the order id to update
 * @param {Order} updatedOrder the order to update
 */

async function UpdateOrder(orderId: string, updatedOrder: Order) {
    return prisma.order.update({
        where: {
            orderId: orderId,
        },
        data: {
            restaurantId: updatedOrder.restaurantId,
            customerEmail: updatedOrder.customerEmail,
            delivererEmail: updatedOrder.delivererEmail,
            date: updatedOrder.date,
            menuId: updatedOrder.menuId,
            dishId: updatedOrder.dishId,
        },
    });
}


export {CreateOrder, GetOrder, GetAllOrders, DeleteOrder, UpdateOrder};
