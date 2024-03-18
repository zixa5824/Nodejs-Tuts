const express = require('express');

const app = express();

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method = "post"><input type></form>');
});

app.use('/product',(req,res,next)=>{
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello From EXPRESS!</h1>');
});

app.listen(3000);
