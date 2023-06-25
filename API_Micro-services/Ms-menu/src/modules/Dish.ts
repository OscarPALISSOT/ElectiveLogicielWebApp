import {PrismaClient} from '@prisma/client';
import {Dish} from "../interfaces/Dish";

const prisma = new PrismaClient();

/**
 * Create a dish
 *  @param {Dish} dish the dish to create
 */
async function CreateDish(dish: Dish) {
    return prisma.dish.create({
        data: {
            name: dish.name,
            restaurantId: dish.restaurantId,
            description: dish.description,
            price: dish.price,
        },
    });
}

/**
 * Get a dish
 * @param {string} dishId the dish id to get
 */
async function GetDish(dishId: string) {
    return prisma.dish.findUnique({
        where: {
            dishId: dishId,
        },
    });
}

/**
 * Get all dishes from a restaurant
 * @param {string} restaurantId the restaurant id to get dishes from
 */
async function GetAllDishes(restaurantId: string) {
    return prisma.dish.findMany(
        {
            where: {
                restaurantId: restaurantId,
            }
        }
    );
}

/**
 * Delete a dish
 * @param {string} dishId the dish id to delete
 */
async function DeleteDish(dishId: string) {
    return prisma.dish.delete({
        where: {
            dishId: dishId,
        },
    });
}

/**
 * Update a dish
 * @param {string} dishId the dish id to update
 * @param {Dish} updatedDish the new dish
 */
async function UpdateDish(dishId: string, updatedDish: Dish) {
    return prisma.dish.update({
        where: {
            dishId: dishId,
        },
        data: {
            name: updatedDish.name,
            description: updatedDish.description,
            price: updatedDish.price,
        },
    });
}

/**
 * Add a dish to a menu
 * @param {string} disId the dish id to add
 * @param {string} menuId the menu id to add the dish to
 */
async function AddDishToMenu(disId: string, menuId: string) {
    return prisma.dish.update({
        where: {
            dishId: disId,
        },
        data: {
            menus : {
                connect: {
                    menuId: menuId,
                }
            }
        }
    })
}

export { CreateDish, GetDish, GetAllDishes, DeleteDish, UpdateDish, AddDishToMenu };
