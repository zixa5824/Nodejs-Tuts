const express = require('express');
const path = require('path');
const testroutes = require('./routes/test');
const testCopyRoutes = require('./routes/test copy');


const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(testCopyRoutes);
app.use(testroutes);


app.use('/', (req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views', 'test.html'));
});

app.listen(3000);