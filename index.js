const express = require('express')
const path= require('path')
const App = express()
const port = 3000

App.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'simple.html' ))
})
App.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})