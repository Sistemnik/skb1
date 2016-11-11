
import express from 'express'

import cors from 'cors'

//import canonize from './canonize'


//var express = require('express');
 var app = express();
 app.use(cors());

 app.get('/task2A', (req, res) => {
   const a = req.query.a;
   const b = req.query.b;
   const result = (parseInt(a) || 0) + (parseInt(b) || 0);
   res.send( result.toString() );
 });

 app.listen(3000, () => {
 console.log('Example app listening on port 3000!');
 });

