import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import {
    CreateRestaurant,
    DeleteRestaurant,
    GetAllRestaurants,
    GetRestaurant,
    UpdateRestaurant
} from "../modules/restaurant";
import {Restaurant} from "../interfaces/Restaurant";
import {FoodType} from "../interfaces/FoodType";

const router = express.Router();


/**
 * ping restaurants route
 */
router.get<{}, MessageResponse>('/', (req, res) => {
  res.status(200).json({ message: 'Restaurants route' });
});

/**
 * create a restaurant
 */
router.post('/create', async function (req, res, next) {
    const { name, owner, staff, address, city, postalCode, country, foodType, openingHours } = req.query;

    const restaurant = {
        name: name as string,
        owner: owner as string,
        staff: (staff as string)?.replace(' ', '').split(','),
        address: address as string,
        city: city as string,
        postalCode: postalCode as string,
        country: country as string,
        foodType: {
            foodTypeLabel: foodType as string,
        } as FoodType,
        openingHours: openingHours as string,
    } as Restaurant;

    try {
        const newRestaurant = await CreateRestaurant(restaurant);
        res.status(200).json({ response: newRestaurant });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


/**
 * get a restaurant
 */
router.get('/getRestaurant', async function (req, res, next) {
    const { restaurantId } = req.query;
    try {
        const Restaurant = await GetRestaurant(restaurantId as string);
        res.status(200).json({ response: Restaurant });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

/**
 * get all restaurants
 */
router.get('/getAllRestaurants', async function (req, res, next) {
    try {
        const Restaurants = await GetAllRestaurants();
        res.status(200).json({ response: Restaurants });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


/**
 * delete a restaurant
 */
router.delete('/deleteRestaurant', async function (req, res, next) {
    const { restaurantId } = req.query;
    try {
        await DeleteRestaurant(restaurantId as string);
        res.status(200).json({ response: 'Restaurant deleted' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

/**
 * update a restaurant
 */
router.patch('/updateRestaurant', async function (req, res, next) {
    const { restaurantId, name, owner, staff, address, city, postalCode, country , openingHours } = req.query;

    const restaurant = {
        restaurantId: restaurantId as string,
        name: name as string,
        owner: owner as string,
        staff: (staff as string)?.replace(' ', '').split(','),
        address: address as string,
        city: city as string,
        postalCode: postalCode as string,
        country: country as string,
        openingHours: openingHours as string,
    } as Restaurant;

    try {
        await UpdateRestaurant(restaurantId as string, restaurant);
        res.status(200).json({ response: 'Restaurant updated' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

export default router;
