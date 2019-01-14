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
 *         $ref: '#/components/responses/SampleItem'
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
 *     description: |
 *          *Lorem ipsum* dolor sit amet consectetur adipiscing elit, viverra venenatis pellentesque cum ut habitant, suscipit luctus class vehicula
 *          rhoncus netus. Curabitur sodales fames vulputate posuere turpis cubilia himenaeos, dignissim praesent tempor dapibus orci felis conubia
 *          eget, pellentesque mollis arcu sapien quis mi. Hendrerit sagittis tellus facilisi euismod scelerisque inceptos laoreet felis sociis
 *          vulputate magna ut, ornare porta mattis fusce habitant consequat tempus semper mus a dignissim.
 *
 *          **Sed quam ullamcorper id nascetur** ad tristique dui scelerisque porttitor tempus himenaeos justo, lobortis sociis aenean nunc arcu nostra
 *          sollicitudin lacinia vitae fermentum nam, suscipit enim rutrum vestibulum congue augue convallis erat aliquet ultrices vel. Convallis
 *          auctor penatibus viverra mattis id ultricies facilisi, interdum aenean eu erat est mollis, neque mi ridiculus sodales accumsan class.
 *          Nam integer leo suspendisse metus gravida feugiat proin, fermentum nullam quam inceptos etiam.
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

/**
 * @swagger
 *
 * /samples/old/{sampleId}:
 *   delete:
 *     deprecated: true
 *     summary: Remove sample
 *     description: Remove sample
 *     tags: [Samples]
 *     security:
 *     - BearerAuth: []
 *     parameters:
 *     - $ref: '#/components/parameters/sampleId'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Deprecated'
 */
router.delete('/old/:id', (req, res) => {
  res.json(controller.removeOld(req, res))
})

module.exports = router
