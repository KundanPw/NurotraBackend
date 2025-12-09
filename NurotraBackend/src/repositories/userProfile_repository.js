const CrudRepository = require('./crud_repository');
const{UserProfile} = require('../models');

class UserProfileRepository extends CrudRepository{
    constructor(){
        super(UserProfile);
    }
}

module.exports = UserProfileRepository;