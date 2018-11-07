'use strict';

console.log('Hello there');

const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello Modified, do you got the point?');
  console.log('Server GET called');  
});

app.get('/test', (req, res) => {
  res.send('Hello Test');
  console.log('Server GET /test called');  
});

 
app.listen(3000);
