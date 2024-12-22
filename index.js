const express = require('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT

console.log(port)

app.listen(port,'0.0.0.0',()=>{
    console.log(`Server is running on port ${port}`)
})