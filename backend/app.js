const express = require('express')
const cors = require('cors')

const logger = require('./middleware/logger')
const auth = require('./middleware/auth')
const errorHandler = require('./middleware/errorHandler')

const app = express()

// app.use(cors({ origin: process.env.APP_URL }))
app.use(cors())
app.use(express.json())

app.use(logger);

const userRoutes = require('./route/user')
const dashboardRoutes = require('./route/dashboard')
app.use('/api/user', userRoutes)
app.use('/api/dashboards', dashboardRoutes)

app.get('/', cors(process.env.CORS), (req, res) => {
  console.log("per");
  res.status(200).json("OK")
})

// app.get('/api/public', cors(process.env.CORS), (req, res) => {
//   console.log("public");
//   res.send('Hello World! Public')
// })

// app.get('/api/private', [cors(process.env.CORS), auth({block: true})], (req, res) => {
//   console.log("private");
//   res.send(`Hello World! Private: ${res.locals.userId}`)
// })

// app.get('/api/prub',  [cors(process.env.CORS), auth({block: false})], (req, res) => {
//   console.log("prub");
//   if  (!res.locals.userId) return res.send('Hello world prublic')
//   res.send(`Hello World! Private, your id: ${res.locals.userId}`)
// })

app.use(errorHandler);

module.exports = app