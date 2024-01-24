const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const route_way = require('./routes/rout')
const bodyParser = require('body-parser')
const cors = require('cors')


//express app
const app = express()

//middleware
app.use(cors({origin:"http://localhost:3000",}))
app.use(bodyParser.json())
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

//routes

app.use('/api/hello', route_way)


//connect to Mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT,() =>{
            console.log('connected to db listining on ',process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


