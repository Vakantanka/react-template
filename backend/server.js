require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

const port = process.env.PORT

mongoose
.connect(process.env.CONNECTION_STRING)
.then(() => {
  console.log("Connected.")
})
.catch(() => console.log("Error."))

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})