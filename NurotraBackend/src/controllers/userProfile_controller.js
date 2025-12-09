const { StatusCodes } = require('http-status-codes');

const{UserProfileService} = require('../services');
const{SuccessResponse, ErrorResponse} = require('../utils/common');

async function createUserProfile(req, res) {
    try{
        const userProfile = await UserProfileService.createUserProfile({
            nuroId: req.body.nuroId,
            email: req.body.email,
            instagramUrl: req.body.instagramUrl,
            followerCount: req.body.followerCount,
            profilePicture: req.body.profilePicture,
            previousBrandWorked: req.body.previousBrandWorked,
            brandName: req.body.brandName
        });

        SuccessResponse.data = userProfile;
        return res
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse)
    } catch(error){
        ErrorResponse.error = error;
        return res
                  .status(500)
                  .json(ErrorResponse)
    }
}

module.exports = {
    createUserProfile,
}