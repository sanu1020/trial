const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://isurge:surge@cluster0.vyyaf.mongodb.net/mytable?retryWrites=true&w=majority", {
    useNewUrlParser:true,
})


application.listen(3001, () =>{
    console.log("server running on port 3001...")
}) 