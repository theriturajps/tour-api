const app = require('./app.js')
const connectDB = require('./src/db/connect.js')

connectDB()

// const testTour = new Tour({
//   tourName: 'car racing',
//   rating: 4.8,
//   price: 499
// })

// testTour.save().then(doc => {
//   console.log(doc);
// }).catch((err) => {
//   console.log(`ERROR : 😒 ${err.errmsg} 😒`)
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`http://127.0.0.1:3000`)
})
