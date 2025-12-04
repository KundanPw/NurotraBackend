const express = require('express');

const { InfoController } = require('../../controllers');

const userRoutes = require('./user_route');

const router = express.Router();

router.use('/users', userRoutes);

router.get('/getInfo', InfoController.getInfo);

module.exports = router;