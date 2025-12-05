const {StatusCode} = require('http-status-codes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "your_jwt_secret";
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

async function loginUser(email, password) {
    try {
        const user = await userRepository.findByEmail(email);
        
        const isValidPassword = await bcrypt.compare(password, user.password);

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email}, process.env.JWT_SECRET,
            { expiresIn: "2h" } // Token expires in 2 hours
        );

        if (!user||!isValidPassword) {
            throw new Error('Invalid email or password');
        }

        return {
            email: user.email,
            token,
         };
    } catch (error) {
        throw new Error("Login service failed: " + error.message);
    }
}

module.exports = {
    registerUser,
    loginUser
};