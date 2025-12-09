const { StatusCodes } = require('http-status-codes');
const {UserProfileRepository} = require('../repositories');

const AppError = require('../utils/error/app-error');

const userProfileRepository = new UserProfileRepository();

async function createUserProfile(data) {
  try {
    const profile = await userProfileRepository.create(data);
    return profile;
    
  } catch (error) {
    throw new AppError('Can not create user profile', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createUserProfile
};

