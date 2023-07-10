import { PrismaClient } from '@prisma/client';
import { Evaluation } from '../interfaces/Evaluation';

const prisma = new PrismaClient();


/**
 * Create an evaluation
 * @param {Evaluation} evaluation the evaluation to create
 */
async function CreateEvaluation(evaluation: Evaluation) {
  return prisma.evaluation.create({
    data: {
      restaurantId: evaluation.restaurantId,
      authorEmail: evaluation.authorEmail,
      comment: evaluation.comment,
      date: evaluation.date,
      note: evaluation.note,
    },
  });
}

/**
 * Get an evaluation
 * @param {string} evaluationId the evaluation id to get
 */
async function GetEvaluation(evaluationId: string) {
  return prisma.evaluation.findUnique({
    where: {
      evaluationId: evaluationId,
    },
  });
}

/**
 * Get all evaluations from a Restaurant
 * @param {string} restaurantId the Restaurant id to get evaluations from
 */
async function GetAllEvaluations(restaurantId: string) {
  return prisma.evaluation.findMany({
    where: {
      restaurantId: restaurantId,
    },
  });
}

/**
 * Delete an evaluation
 * @param {string} evaluationId the evaluation id to delete
 */
async function DeleteEvaluation(evaluationId: string) {
  return prisma.evaluation.delete({
    where: {
      evaluationId: evaluationId,
    },
  });
}

/**
 * Update an evaluation
 * @param {string} evaluationId the evaluation id to update
 * @param {Evaluation} updatedEvaluation the evaluation to update
 */
async function UpdateEvaluation(evaluationId: string, updatedEvaluation: Evaluation) {
  return prisma.evaluation.update({
    where: {
      evaluationId: evaluationId,
    },
    data: {
      restaurantId: updatedEvaluation.restaurantId,
      authorEmail: updatedEvaluation.authorEmail,
      comment: updatedEvaluation.comment,
      date: updatedEvaluation.date,
      note: updatedEvaluation.note,
    },
  });
}

export { CreateEvaluation, GetEvaluation, GetAllEvaluations, DeleteEvaluation, UpdateEvaluation };
