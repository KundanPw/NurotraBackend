const express = require('express');

const{UserProfileController} = require('../../controllers');

const router = express.Router();

// /api/v1/userProfiles - POST
router.post('/', UserProfileController.createUserProfile);

module.exports = router;

