const express = require('express');
const mongoose = require('mongoose')
const app = express();
const router = require('./routes/book-routes')
const cors = require('cors')

// Middlewares 

app.use(express.json())

app.use(cors())

app.use("/books",router) // localhost:5000/books


mongoose.connect("mongodb+srv://admin:qYbg2WnQd1UI6qYd@cluster0.iwgvsgq.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=> console.log("Connected To Database")).then(()=>{
    app.listen(5000);
}).catch((err)=> console.log(err))

// qYbg2WnQd1UI6qYd