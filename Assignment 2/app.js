const express = require('express');

const app = express();

/*
app.use((req,res,next)=>{
    console.log('1');
    next();
});

app.use((req,res,next)=>{
    console.log('2');
    res.send('<h1>HI 2</h1>')
});
*/

app.use('/users',(req,res,next)=>{
    res.send('<h1>HI 1</h1>')
});

app.use('/',(req,res,next)=>{
    res.send('<h1>HI 2</h1>')
});


app.listen(3000);