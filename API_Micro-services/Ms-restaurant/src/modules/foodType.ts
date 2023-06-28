import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/**
 * Create a food type
 * @param {string} foodType the food type label to create
 */
async function CreateFoodType(foodType: string) {
  return prisma.foodType.create({
    data: {
      foodTypeLabel: foodType,
    },
  });
}

/**
 * Get a food type
 * @param {string} foodType the food type label to get
 */
async function GetFoodType(foodType: string) {
  return prisma.foodType.findUnique({
    where: {
      foodTypeLabel: foodType,
    },
  });
}

/**
 * Get all food types
 */
async function GetAllFoodTypes() {
  return prisma.foodType.findMany();
}

/**
 * Delete a food type
 * @param {string} foodType the food type label to delete
 */
async function DeleteFoodType(foodType: string) {
  return prisma.foodType.delete({
    where: {
      foodTypeLabel: foodType,
    },
  });
}

/**
 * Update a food type
 * @param {string} foodType the food type label to update
 * @param {string} newFoodType the new food type label
 */
async function UpdateFoodType(foodType: string, newFoodType: string) {
  return prisma.foodType.update({
    where: {
      foodTypeLabel: foodType,
    },
    data: {
      foodTypeLabel: newFoodType,
    },
  });
}

async function GetNumberFood(number: number) {
  return prisma.foodType.findMany({
    take: number,
  });
}

export { CreateFoodType, GetFoodType, GetAllFoodTypes, DeleteFoodType, UpdateFoodType, GetNumberFood};