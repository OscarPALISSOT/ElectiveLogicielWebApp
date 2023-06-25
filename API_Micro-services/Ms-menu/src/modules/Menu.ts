import {PrismaClient} from '@prisma/client';
import {Menu} from "../interfaces/Menu";

const prisma = new PrismaClient();

/**
 * Create a Menu
 * @param {Menu} menu the menu to create
 */
async function CreateMenu(menu: Menu) {
    return prisma.menu.create({
        data: {
            restaurantId: menu.restaurantId,
            name: menu.name,
            description: menu.description,
            price: menu.price,

        },
    });
}

/**
 * Get a menu
 */
async function GetMenu(menuId: string) {
    return prisma.menu.findUnique({
        where: {
            menuId: menuId,
        },
    });
}

/**
 * Get all menus from a restaurant
 */
async function GetAllMenus(restaurantId: string) {
    return prisma.menu.findMany(
        {
            where: {
                restaurantId: restaurantId,
            }
        }
    );
}

/**
 * Delete a menu
 * @param {string} menuId the menu id to delete
 */
async function DeleteMenu(menuId: string) {
    return prisma.menu.delete({
        where: {
            menuId: menuId,
        },
    });
}

/**
 * Update a menu
 * @param {string} menuId the menu id to update
 * @param {Menu} updatedMenu the new menu
 */
async function UpdateMenu(menuId: string, updatedMenu: Menu) {
    return prisma.menu.update({
        where: {
            menuId: menuId,
        },
        data: {
            name: updatedMenu.name,
            description: updatedMenu.description,
            price: updatedMenu.price,
        },
    });
}


export {CreateMenu, GetMenu, GetAllMenus, DeleteMenu, UpdateMenu};