const {StatusCode} = require('http-status-codes');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = "your_jwt_secret";
const { UserRepository } = require('../repositories');
const { ServerConfig } = require('../config');

const userRepository = new UserRepository();

async function registerUser(data) {
    try {
        const {name, email, password, role} = data;

        console.log("Email is ", email);

        const existingUser = await userRepository.getByEmail(email);
        console.log("Existing voter is ", existingUser);
        if(existingUser) {
            throw new Error("User already exist");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userRepository.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        });

        return user;

    } catch (error) {
        console.error("Error during registering");
        throw error;
    }
}

module.exports = {
    registerUser
};