import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

/**
 * ping authentication route
 */
router.get<{}, MessageResponse>('/', (req, res) => {
  res.status(200).json({ message: 'Authentication routes' });
});


export default router;
