const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorMiddleware')
const port = process.env.PORT || 4000;

connectDB()
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended : false}))

app.use('/api/goals' , require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port , () => console.log(`Running on port ${port}`))
