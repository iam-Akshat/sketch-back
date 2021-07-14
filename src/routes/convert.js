const { Router } =  require('express');

const upload = require('../middlewares/upload');

const convert = require('../controller/convert');

const convertRoutes = Router();

convertRoutes.post('/convert',upload.single('image'),convert)

module.exports = convertRoutes