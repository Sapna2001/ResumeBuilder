const mongoose = require('mongoose')

const URL = 'mongodb+srv://ResumeBuilder:resumebuildersapna1%40@cluster0.w9z3g.mongodb.net/resume-builder'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})
