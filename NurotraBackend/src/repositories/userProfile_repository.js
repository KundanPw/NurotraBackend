const CrudRepository = require('./crud_repository');
const{UserProfiles} = require('../models');

class UserProfileRepository extends CrudRepository{
    constructor(){
        super(UserProfiles);
    }
}

module.exports = UserProfileRepository;