const express = require("express")
require("dotenv/config")
const dt = require("./lib/db.js")
const Task = require("./model/model.js")
const CORS = require("cors")

const app = express()

app.use(express.json())

app.use(CORS({useCredentials : false , origin : "https://caring-humor.surge.sh"}))

app.get("/api/getdata" , async (req , res) => { 
    try{
        const task = await Task.find()
        res.status(200).json({data : task})
    } catch (err) {
        res.status(400).json({message : err.message})
    }
})

app.post("/api/createdata" , async (req , res) => {
    try{
        const {name , age} = req.body
        const task = await Task.create({name , age})
        res.status(201).json({data : task})
    } catch (err){
        res.status(400).json({message : err.message})
    }
})

const port = process.env.port

app.listen(port , () => { console.log(`Running on port : ${port}`) ; dt()})
