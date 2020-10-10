const express = require('express');
const app = express();

app.use(express.json())

app.get('/home-teste',(req, res)=>{
    res.send('hello world')
})

app.listen(3000, ()=>{
    console.log('Servidor rodando');
})