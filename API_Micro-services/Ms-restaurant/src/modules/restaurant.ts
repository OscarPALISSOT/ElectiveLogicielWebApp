import { PrismaClient } from '@prisma/client';
import { Restaurant } from '../interfaces/Restaurant';

const prisma = new PrismaClient();


/**
 * Create a restaurant
 * @param {Restaurant} restaurant the restaurant to be created
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
        connect: {
          foodTypeLabel: restaurant.foodType.foodTypeLabel,
        },
      },
      openingHours: restaurant.openingHours,
    },
  });
}

/**
 * Get a restaurant
 * @param {string} restaurantId the restaurant id to be retrieved
 */
async function GetRestaurant(restaurantId: string) {
  return prisma.restaurant.findUnique({
    where: {
      restaurantId: restaurantId,
    },
    include: {
      foodType: true,
    },
  });
}

/**
 * Get all restaurants
 */
async function GetAllRestaurants() {
  return prisma.restaurant.findMany({
    include: {
      foodType: true,
    },
  });
}

/**
 * Delete a restaurant
 * @param {string} restaurantId the restaurant id to be deleted
 */
async function DeleteRestaurant(restaurantId: string) {
  return prisma.restaurant.delete({
    where: {
      restaurantId: restaurantId,
    },
  });
}

/**
 * Update a restaurant
 * @param {string} restaurantId the restaurant id to be updated
 * @param {Restaurant} newRestaurant the new restaurant data
 */
async function UpdateRestaurant(restaurantId: string, newRestaurant: Restaurant) {
  return prisma.restaurant.update({
    where: {
      restaurantId: restaurantId,
    },
    data: {
      name: newRestaurant.name,
      owner: newRestaurant.owner,
      staff: newRestaurant.staff,
      address: newRestaurant.address,
      city: newRestaurant.city,
      postalCode: newRestaurant.postalCode,
      country: newRestaurant.country,
      openingHours: newRestaurant.openingHours,
    },
  });
}


/**
 * get 3 first restaurants
 */
async function GetNumberRestaurant(number: number) {
  return prisma.restaurant.findMany({
    take: number,
    include: {
      foodType: true,
    },
  });
}

/**
 * search a restaurant
 *  @param {string} letter the letter to be searched
 */

async function SearchRestaurant(letter: string) {
  return prisma.restaurant.findMany({
    where: {
      name: {
        contains: letter,
        mode: 'insensitive',
      },
    },
  });
}

export { CreateRestaurant, GetRestaurant, GetAllRestaurants, DeleteRestaurant, UpdateRestaurant, GetNumberRestaurant, SearchRestaurant };