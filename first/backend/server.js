const express = require('express')
const app= express()

const mongoose=require('mongoose')
const dotenv=require('dotenv')
const routerurl= require('../backend/Request/Request')
const cors=require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("Database Connected"))
app.use(express.json)
app.use(cors())
app.use('/app',routerurl)

app.listen(4000,()=> console.log("Server is running"))

