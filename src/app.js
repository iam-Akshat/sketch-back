const express = require('express');
const convertRoutes = require('./routes/convert');
const isProduction = require('./utils/isProduction');
const app = express();

app.use(require('cors')({
    origin: isProduction() ? 'https://gallant-thompson-dcb12f.netlify.app': 'http://localhost:3000' 
}))
app.use(express.json())

app.use(convertRoutes);

module.exports = app;