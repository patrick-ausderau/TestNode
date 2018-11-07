'use strict';

console.log('Hello there');

const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello Modified, do you got the point?');
  console.log('Server GET called');  
})
 
app.listen(3000);
