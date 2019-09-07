const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello Nginx NodeJS From ${process.env.NUM_SERVER}`);
});

app.listen('3000', () => console.log(`${process.env.NUM_SERVER} Server is running on port 3000`));
