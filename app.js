const express = require('express')
const morgan = require('morgan')
const tourRouter = require('./src/routes/tourRoutes.js')
const userRouter = require('./src/routes/userRoutes.js')
const app = express()


// middleware
app.use(morgan('dev'));
app.use(express.json()) // middleware -> function which modify the incoming data
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString()
	next() // always do this
})

app.get('/doc', (req, res) => {
	res.sendFile(`${__dirname}/public/doc.html`)
})

app.use('/api/v1/tour', tourRouter)
app.use('/api/v1/user', userRouter)

module.exports = app