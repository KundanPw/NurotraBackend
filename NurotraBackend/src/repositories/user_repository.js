const CrudRepository = require('./crud_repository');

const{User} = require('../models');

class UserRepository extends CrudRepository{
    constructor() {
        super(User);
    }
    async findByEmail(email) {
        // Simulate finding a user by email in the "database"
        return User.find(user => user.email === email);
    }
}

module.exports = UserRepository;