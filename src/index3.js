
import express from 'express'

import cors from 'cors'


//var express = require('express');
var app = express();
app.use(cors());

app.get('/sistemnik2C', (req, res) => {
  const username = canonize(req.query.username);
res.send( username );
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});



function canonize(url) {
  const re = /durov/i;
  const username = url.match(re) || 'Invalid username';
  return '@' + username;
}
