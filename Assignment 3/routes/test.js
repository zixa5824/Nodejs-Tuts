const express = require('express');
const path = require('path');
const router = express.Router();


router.post('/', (req,res,next)=>{
    res.redirect('/users');
});

module.exports = router;