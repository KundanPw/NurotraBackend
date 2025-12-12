const express = require('express');

const { InfoController } = require('../../controllers');
const userRoutes = require('./user_route');
const userProfileRoutes = require('./userProfile_route');
const companyRoutes = require('./company_route');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/userProfiles', userProfileRoutes);
router.use('/companies', companyRoutes);

router.get('/getInfo', InfoController.getInfo);

module.exports = router;