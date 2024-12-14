const { mongoose } = require('mongoose')

const tourSchema = new mongoose.Schema({
	tourName: {
		type: String,
		required: [true, 'tour must have the name'],
		unique: true,
		trim: true
	},
	duration: {
		type: Number,
		required: [true, 'A tour must have the duration']
	},
	maxGroupSize: {
		type: Number,
		required: [true, 'A tour must have a group size']
	},
	difficulty: {
		type: String,
		required: [true, 'A tour must have the difficulty']
	},
	ratingsAverage: {
		type: Number,
		default: 2.5,
		min: [1, 'Rating must be above 1.0'],
		max: [5, 'Rating must be below 5.0']
	},
	ratingsQuantity: {
		type: Number,
		default: 0
	},
	price: {
		type: Number,
		default: 0,
		required: [true, 'tour must have the price']
	},
	priceDiscount: Number,
	summary: {
		type: String,
		trim: true,
		required: [true, 'tour must have the summary']
	},
	description: {
		type: String,
		trim: true
	},
	imageCover: {
		type: String,
		required: [true, 'A tour must have a cover image']
	},
	images: [String],
	createdAt: {
		type: Date,
		default: Date.now(),
		select: false
	},
	startDates: [Date],
	secretTour: {
		type: Boolean,
		default: false
	}
})

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour;