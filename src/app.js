const express = require('express');

const app = express();

app.use(require('cors')({
    origin:'http://localhost:3000'
}))

module.exports = app;