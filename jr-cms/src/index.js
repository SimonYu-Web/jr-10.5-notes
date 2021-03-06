require('dotenv').config();
require('express-async-errors');
const express = require('express');

const routes = require('./routes');
const { connectToDB } = require('./utils/db');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

connectToDB();
app.listen(3000, () => {
  console.log('listening on port 3000');
});
