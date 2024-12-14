require('dotenv').config();
const mongoose = require('mongoose')

const url = `${process.env.DATABASE_URI}`

if (!url) throw new Error("DB connection URL not provided");

const connectDB = async () => {
	await mongoose.connect(url)
		.then((connected) => console.log('DB connection successful!'))
		.catch((error) => console.log(error))
}

module.exports = connectDB