import express from 'express';
import path from 'path';

const router = express.Router();

/**
 * get a restaurant thumbnail
 */

router.get('/getDishesThumbnail', async function (req, res, next) {
    const { disheThumbnail } = req.query;
    try {
        res.status(200).sendFile(path.join(__dirname, '../../assets/dishesThumbnail/' + disheThumbnail));
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

export default router;