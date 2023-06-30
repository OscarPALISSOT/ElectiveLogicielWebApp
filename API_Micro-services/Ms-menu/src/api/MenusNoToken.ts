import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import {Menu} from "../interfaces/Menu";
import {CreateMenu, DeleteMenu, GetAllMenus, GetMenu, UpdateMenu} from "../modules/Menu";

const router = express.Router();

/**
 * Ping menus route
 */
router.get<{}, MessageResponse>('/', (req, res) => {
    res.status(200).json({message: 'Menus route'});
});

/**
 * Create a menu
 */
router.post('/create', async function (req, res, next) {
    const {name, restaurantId, price, description} = req.query;

    if (!name || !restaurantId || !price || !description) {
        res.status(400).json({error: 'Missing parameters'});
    } else {
        const menu = {
            name: name as string,
            restaurantId: restaurantId as string,
            price: +price as number,
            description: description as string,
        } as Menu;
        try {
            const newMenu = await CreateMenu(menu);
            res.status(200).json({response: newMenu});
        } catch (error) {
            res.status(500).json({error: error});
        }
    }
});

/**
 * Get a menu
 */
router.get('/getMenu', async function (req, res, next) {
    const {menuId} = req.query;
    try {
        const menu = await GetMenu(menuId as string);
        res.status(200).json({response: menu});
    } catch (error) {
        res.status(500).json({error: error});
    }
});

/**
 * Get all menus from a restaurant
 */
router.get('/getAllMenus', async function (req, res, next) {
    const {restaurantId} = req.query;
    try {
        const menus = await GetAllMenus(restaurantId as string);
        res.status(200).json({response: menus});
    } catch (error) {
        res.status(500).json({error: error});
    }
});

/**
 * Delete a menu
 */
router.delete('/delete', async function (req, res, next) {
    const {menuId} = req.query;
    try {
        await DeleteMenu(menuId as string);
        res.status(200).json({response: 'Menu deleted'});
    } catch (error) {
        res.status(500).json({error: error});
    }
});

/**
 * Update a menu
 */
router.patch('/update', async function (req, res, next) {
    const {menuId, name, restaurantId, price, description} = req.query;

    if (!name || !restaurantId || !price || !description || !menuId) {
        res.status(400).json({error: 'Missing parameters'});
    } else {
        const menu = {
            name: name as string,
            restaurantId: restaurantId as string,
            price: +price as number,
            description: description as string,
        } as Menu;
        try {
            await UpdateMenu(menuId as string, menu);
            res.status(200).json({response: 'Menu updated'});
        } catch (error) {
            res.status(500).json({error: error});
        }
    }
});
export default router;
