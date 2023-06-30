import express from "express";
import path from "path";

const router = express.Router();

/**
 * get a restaurant thumbnail
 */

router.get('/getRestaurantThumbnail', async function (req, res, next) {
    const { restaurantThumbnail } = req.query;
    try {
        res.status(200).sendFile(path.join(__dirname, '../../assets/restaurantsThumbnail/' + restaurantThumbnail));
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

export default router;