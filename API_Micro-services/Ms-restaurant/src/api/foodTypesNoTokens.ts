import express from "express";
import path from "path";

const router = express.Router();

/**
 * get a foodType thumbnail
 */
router.get('/getFoodTypeThumbnail', async function (req, res, next) {
    const { foodTypeIcons } = req.query;
    try {
        res.status(200).sendFile(path.join(__dirname, '../../assets/foodTypesIcons/' + foodTypeIcons));
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

export default router;