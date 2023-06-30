import express from 'express';
import * as fs from 'fs';
import fileUpload from 'express-fileupload';

import MessageResponse from '../interfaces/MessageResponse';
import {
  CreateFoodType,
  DeleteFoodType,
  GetAllFoodTypes,
  GetFoodType,
  GetNumberFood,
  UpdateFoodType,
} from '../modules/foodType';
import path from 'path';

const router = express.Router();

router.use(fileUpload());


/**
 * ping foodTypes route
 */
router.get<{}, MessageResponse>('/', (req, res) => {
  res.status(200).json({ message: 'FoodTypes route' });
});


/**
 * create a foodType
 */
router.post('/create', async function (req, res, next) {
  const { foodType } = req.query;
  const foodTypeThumbnail = req.files?.foodTypeThumbnail as fileUpload.UploadedFile;

  const icon = foodType + '.' + foodTypeThumbnail.name.split('.').pop();

  try {
    fs.writeFile(`./assets/foodTypesIcons/${foodType}.${foodTypeThumbnail.name.split('.').pop()}`, foodTypeThumbnail.data, (err) => {
      if (err) throw err;
    });
    const newFoodType = await CreateFoodType(foodType as string, icon);
    res.status(200).json({ response: newFoodType });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


/**
 * get a foodType
 */
router.get('/getFoodType', async function (req, res, next) {
  const { foodType } = req.query;
  try {
    const FoodType = await GetFoodType(foodType as string);
    res.status(200).json({ response: FoodType });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * get all foodTypes
 */
router.get('/getAllFoodTypes', async function (req, res, next) {
  try {
    const FoodTypes = await GetAllFoodTypes();
    res.status(200).json({ response: FoodTypes });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * delete a foodType
 */
router.delete('/delete', async function (req, res, next) {
  const { foodType, icon } = req.query;
  fs.unlink(path.join(__dirname, '../../assets/foodTypesIcons/' + icon), (err) => {
    if (err) {
      throw err;
    }
  });
  try {
    await DeleteFoodType(foodType as string);
    res.status(200).json({ response: 'FoodType deleted' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * update a foodType
 */
router.patch('/updateFoodType', async function (req, res, next) {
  const { foodType, updatedFoodType } = req.query;
  try {
    await UpdateFoodType(foodType as string, updatedFoodType as string);
    res.status(200).json({ response: 'FoodType updated' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get('/getFeaturedFood', async function (req, res, next) {
  try {
    const Foods = await GetNumberFood(3);
    res.status(200).json({ response: Foods });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;