const express = require('express')
const router = express.Router()
const { getAllTours, getTour, createTour, updateTour, deleteTour } = require('../../src/controllers/tourController.js')

// router.param('id', checkID) // middleware

router.route('/')
	.get(getAllTours)
	.post(createTour) // chain middleware -> first middleware will run then createTour.

router.route('/:id')
	.get(getTour)
	.patch(updateTour)
	.delete(deleteTour)

module.exports = router