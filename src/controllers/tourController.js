const Tour = require('../models/tourModel.js')


const getAllTours = async (req, res) => {
	try {
		const queryObj = { ...req.query }
		const excluedeFields = ['page', 'sort', 'limit', 'fields']
		excluedeFields.forEach(el => delete queryObj[el])

		let queryStr = JSON.stringify(queryObj)
		queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

		let query = Tour.find(JSON.parse(queryStr))

		if (req.query.sort) {
			const sortBy = req.query.sort.split(',').join(' ')
			query = query.sort(sortBy)
		} else {
			query = query.sort('-createdAt')
		}

		const allTours = await query

		res.status(200).json({
			status: `success`,
			resultLength: allTours.length,
			tourData: allTours
		})
	} catch (err) {
		res.status(404).json({
			status: `failed to get : ${err}`
		})
	}
}

const getTour = async (req, res) => {
	try {
		const singleTour = await Tour.findById(req.params.id)
		res.status(200).json({
			status: `success`,
			tourData: singleTour
		})
	} catch (err) {
		res.status(404).json({
			status: `failed`,
			message: err.errmsg
		})
	}
}

const createTour = async (req, res) => {
	try {
		const newTour = await Tour.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				tour: newTour
			}
		});
	} catch (err) {
		res.status(400).json({
			status: `failed`,
			message: err.errmsg
		});
	}
}

const updateTour = async (req, res) => {
	try {
		const updatedTour = await Tour.findOneAndUpdate({
			_id: req.params.id
		}, req.body, {
			new: true
		})

		res.status(200).json({
			status: `updated`,
			toursData: {
				updatedTour
			}
		})
	} catch (err) {
		res.status(404).json({
			status: `failed to update the details`,
			message: err.errmsg
		})
	}
}

const deleteTour = async (req, res) => {
	try {

		const deletedUser = await Tour.deleteOne({
			_id: req.params.id
		})
		res.status(204).json({
			status: `deleted`
		})
	} catch (err) {
		res.status(404).json({
			status: `failed`,
			message: err.errmsg
		})
	}
}

module.exports = {
	getAllTours, getTour, createTour, updateTour, deleteTour
}