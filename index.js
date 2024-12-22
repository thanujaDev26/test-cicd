const express = require('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT

console.log(port)

app.get('/api/message', (req, res) =>{
    res.status(200).json({
        statusbar: 'success',
        message: 'Welcome to the API!'
    })
})

app.get('/api/products', (req, res) =>{
    res.status(200).json({
        statusbar:'success',
        message: 'Here are all our products!'
    })
})

app.listen(port,'0.0.0.0',()=>{
    console.log(`Server is running on port ${port}`)
})