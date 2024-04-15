const express = require("express")
const app= express()
const mongoose = require("mongoose")
require('dotenv').config();

app.use(express.json())
app.use(express.static('public'))


const port = process.env.PORT || 5000 ;
const mongoURL = process.env.MONGO_URI;

mongoose.connect(mongoURL)
const db = mongoose.connection
db.once('open', () => console.log("Connected to Database"))
db.on('error', ()=> console.log("Error in connecting to the Database"))

app.post("/add", (req,res) =>{
    const category_select = req.body.category_select
    const amount_input= req.body.amount_input
    const info = req.body.info
    const date_input = req.body.date_input

    var data={
        "Category": category_select,
        "Amount" : amount_input,
        "Info": info,
        "Date": date_input
    }
    db.collection('users').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Items Inserted Successfully")

    })
})
app.get("/",(req,res) =>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')
})

app.listen(port , () => {
    console.log("server is running ")
})

