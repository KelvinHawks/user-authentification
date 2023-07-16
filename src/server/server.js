const express = require('express')
const {register} = require('./components/Register')
const app = express()

PORT = 5000

//app.use(express.static('./public'))
app.get('/register', (req,res)=>{
    
})

app.get('*', (req,res)=>{
    res.status(404).send('<h1>Site not found</h1>')
})

app.listen(PORT, ()=>{
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
})