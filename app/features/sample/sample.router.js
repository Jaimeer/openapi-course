'use strict'
const controller = require('./sample.controller')
const express = require('express')

const router = express.Router()

/**
 * @swagger
 *
 * /samples:
 *   get:
 *     summary: Get samples
 *     description: Return all samples
 *     tags: [Samples]
 *     security:
 *     - BearerAuth: []
 *     parameters:
 *     - $ref: '#/components/parameters/skipParam'
 *     - $ref: '#/components/parameters/limitParam'
 *     - $ref: '#/components/parameters/langParam'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/SampleList'
 */
router.get('/', async (req, res) => {
  res.json(controller.list())
})

/**
 * @swagger
 *
 * /samples:
 *   post:
 *     summary: Create sample
 *     description: Create new samples
 *     tags: [Samples]
 *     security:
 *     - BearerAuth: []
 *     requestBody:
 *         $ref: '#/components/requestBodies/SampleCreate'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/SampleList'
 */
router.post('/', async (req, res) => {
  res.json(controller.create())
})

/**
 * @swagger
 *
 * /samples/{sampleId}:
 *   get:
 *     summary: Get sample by Id
 *     description: Return sample by Id
 *     tags: [Samples]
 *     security:
 *     - BearerAuth: []
 *     parameters:
 *     - $ref: '#/components/parameters/sampleId'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/SampleItem'
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params
  res.json(controller.get(id))
})

/**
 * @swagger
 *
 * /samples/{sampleId}:
 *   put:
 *     summary: Update sample
 *     description: Update sample
 *     tags: [Samples]
 *     security:
 *     - BearerAuth: []
 *     parameters:
 *     - $ref: '#/components/parameters/sampleId'
 *     requestBody:
 *         $ref: '#/components/requestBodies/SampleUpdate'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/SampleItem'
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params
  res.json(controller.update(id))
})

/**
 * @swagger
 *
 * /samples/{sampleId}:
 *   delete:
 *     summary: Remove sample
 *     description: Remove sample
 *     tags: [Samples]
 *     security:
 *     - BearerAuth: []
 *     parameters:
 *     - $ref: '#/components/parameters/sampleId'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/ItemDeleted'
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  res.json(controller.remove(id))
})

module.exports = router
