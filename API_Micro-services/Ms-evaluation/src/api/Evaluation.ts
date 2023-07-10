import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import {
  CreateEvaluation,
  DeleteEvaluation,
  GetAllEvaluations,
  GetEvaluation,
  UpdateEvaluation
} from '../modules/Evaluation';
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

/**
 * Delete an evaluation
 */

router.delete('/delete', async function (req, res, next) {
  const { evaluationId } = req.query;

  try {
    await DeleteEvaluation(evaluationId as string);
    res.status(200).json({ response: 'Evaluation deleted' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * Update an evalutation
 */

router.patch('/update', async function (req, res, next) {
  const { evaluationId, restaurantId, authorEmail, comment, note } = req.query;

  if (!restaurantId || !authorEmail || !comment || !note) {
    res.status(400).json({ error: 'Missing parameters' });
  } else {
    const updatedEvaluation = {
      restaurantId: restaurantId as string,
      authorEmail: authorEmail as string,
      comment: comment as string,
      date: new Date(),
      note: +note as number,
    } as Evaluation;
    try {
      const updateEvaluation = await UpdateEvaluation(evaluationId as string, updatedEvaluation);
      res.status(200).json({ response: updateEvaluation });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
});

/**
 * Get all evaluations from a Restaurant
 */

router.get('/getAllEvaluations', async function (req, res, next) {
    const { restaurantId } = req.query;

    try {
        const getAllEvaluations = await GetAllEvaluations(restaurantId as string);
        res.status(200).json({ response: getAllEvaluations });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
);

/**
 * Get an evaluation
 *
 */

router.get('/get', async function (req, res, next) {
    const { evaluationId } = req.query;

    try {
        const getEvaluation = await GetEvaluation(evaluationId as string);
        res.status(200).json({ response: getEvaluation });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
);


export default router;