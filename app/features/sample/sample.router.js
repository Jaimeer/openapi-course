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
router.get('/', (req, res) => {
  res.json(controller.list(req, res))
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
router.post('/', (req, res) => {
  res.json(controller.create(req, res))
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
router.get('/:id', (req, res) => {
  res.json(controller.get(req, res))
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
router.put('/:id', (req, res) => {
  res.json(controller.update(req, res))
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
router.delete('/:id', (req, res) => {
  res.json(controller.remove(req, res))
})

module.exports = router
