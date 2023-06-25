import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import {AddDishToMenu, CreateDish, DeleteDish, GetAllDishes, GetDish, UpdateDish} from "../modules/Dish";
import {Dish} from "../interfaces/Dish";

const router = express.Router();

/**
 * Ping dishes route
 */
router.get<{}, MessageResponse>('/', (req, res) => {
    res.status(200).json({ message: 'Dishes route' });
});

/**
 * Create a dish
 */
router.post('/create', async function (req, res, next) {
    const { name, price , description, restaurantId } = req.query;

    if (!name || !price || !description || !restaurantId) {
        res.status(400).json({ error: 'Missing parameters' });
    } else {
        const dish = {
            name: name as string,
            price: +price as number,
            description: description as string,
            restaurantId: restaurantId as string,
        } as Dish;
        try {
            const newDish = await CreateDish(dish);
            res.status(200).json({ response: newDish });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
});

/**
 * Get a dish
 */
router.get('/getDish', async function (req, res, next) {
    const { dishId } = req.query;
    try {
        const dish = await GetDish(dishId as string);
        res.status(200).json({ response: dish });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

/**
 * Get all dishes from a restaurant
 */
router.get('/getAllDishes', async function (req, res, next) {
    const { restaurantId } = req.query;
    try {
        const dishes = await GetAllDishes(restaurantId as string);
        res.status(200).json({ response: dishes });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

/**
 * Delete a dish
 */
router.delete('/deleteDish', async function (req, res, next) {
    const { dishId } = req.query;
    try {
        await DeleteDish(dishId as string);
        res.status(200).json({ response: 'Dish deleted' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

/**
 * Update a dish
 */
router.patch('/updateDish', async function (req, res, next) {
    const { dishId, name, price , description, restaurantId } = req.query;

    if (!dishId || !name || !price || !description || !restaurantId) {
        res.status(400).json({ error: 'Missing parameters' });
    } else {
        const dish = {
            name: name as string,
            price: +price as number,
            description: description as string,
            restaurantId: restaurantId as string,
        } as Dish;
        try {
            await UpdateDish(dishId as string, dish);
            res.status(200).json({ response: 'Dish updated' });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
});


/**
 * Add a dish to a menu
 */
router.patch('/addDishToMenu', async function (req, res, next) {
    const { dishId, menuId } = req.query;

    try {
        await AddDishToMenu(dishId as string, menuId as string);
        res.status(200).json({ response: 'Dish added to menu' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


export default router;