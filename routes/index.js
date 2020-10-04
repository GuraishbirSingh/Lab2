'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var method = req.query.method;


    var FirstVar = req.query.x;
    var SecondVar = req.query.y;

    var output = 0;
   
     if (method == 'add') {
        output = parseInt(FirstVar) + parseInt(SecondVar);
    }

    else if (method == 'Subtract') {
        output = FirstVar - SecondVar;
     }

    else if (method == 'multiply') {
        output = FirstVar * SecondVar;
     }

    else if (method == 'Divide') {
        output = FirstVar / SecondVar;
     }

    else {
        output = "Please enter valid method";
    }
    console.log(output);

    res.render('index', { title: 'Lab2', output:output});
});

module.exports = router;