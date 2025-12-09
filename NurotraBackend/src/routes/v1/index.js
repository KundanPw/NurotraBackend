const express = require('express');

const { InfoController } = require('../../controllers');
const userRoutes = require('./user_route');
const userProfileRoutes = require('./userProfile_route');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/userProfiles', userProfileRoutes);

router.get('/getInfo', InfoController.getInfo);

module.exports = router;