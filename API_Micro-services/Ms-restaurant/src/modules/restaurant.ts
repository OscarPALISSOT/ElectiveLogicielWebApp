import {PrismaClient} from '@prisma/client';
import {Restaurant} from "../interfaces/Restaurant";

const prisma = new PrismaClient();


/**
 * Create a restaurant
 */
async function CreateRestaurant(restaurant: Restaurant) {
    return prisma.restaurant.create({
        data: {
            name: restaurant.name,
            owner: restaurant.owner,
            staff: restaurant.staff,
            address: restaurant.address,
            city: restaurant.city,
            postalCode: restaurant.postalCode,
            country: restaurant.country,
            foodType: {
                connectOrCreate: {
                    where: {
                        foodTypeLabel: restaurant.foodType.foodTypeLabel
                    },
                    create: {
                        foodTypeLabel: restaurant.foodType.foodTypeLabel
                    }
                }
            },
            openingHours: restaurant.openingHours,
        },
    });
}

/**
 * Get a restaurant
 */
async function GetRestaurant(restaurantId: string) {
    return prisma.restaurant.findUnique({
        where: {
            restaurantId: restaurantId,
        },
        include: {
            foodType: true,
        }
    });
}

/**
 * Get all restaurants
 */
async function GetAllRestaurants() {
    return prisma.restaurant.findMany({
        include: {
            foodType: true,
        }
    });
}

/**
 * Delete a restaurant
 */
async function DeleteRestaurant(restaurantId: string) {
    return prisma.restaurant.delete({
        where: {
            restaurantId: restaurantId,
        },
    });
}

export {CreateRestaurant, GetRestaurant, GetAllRestaurants, DeleteRestaurant};