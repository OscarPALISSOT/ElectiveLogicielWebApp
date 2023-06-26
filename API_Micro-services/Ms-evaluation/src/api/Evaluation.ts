import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import { CreateEvaluation } from '../modules/Evaluation';
import { Evaluation } from '../interfaces/Evaluation';

const router = express.Router();

/**
 * Ping evaluation route
 */
router.get<{}, MessageResponse>('/', (req, res) => {
  res.status(200).json({ message: 'Evaluation route' });
});


/**
 * Create an evaluation
 */
router.post('/create', async function (req, res, next) {
  const { restaurantId, authorEmail, comment, note } = req.query;

  if (!restaurantId || !authorEmail || !comment || !note) {
    res.status(400).json({ error: 'Missing parameters' });
  } else {
    const evaluation = {
      restaurantId: restaurantId as string,
      authorEmail: authorEmail as string,
      comment: comment as string,
      date: new Date(),
      note: +note as number,
    } as Evaluation;
    try {
      const newEvaluation = await CreateEvaluation(evaluation);
      res.status(200).json({ response: newEvaluation });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
});

export default router;