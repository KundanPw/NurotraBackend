const { StatusCodes } = require('http-status-codes');
const { UserService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { success, message } = require('../utils/common/error_response');

async function registerUser(req, res) {
    try {
        const user = UserService.registerUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        });
        console.log(user);
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
          });
    } catch (error) {
       return res.status(500).json({
           success: false,
           message: "Internal server error",
           error: error
       });
    }
}

async function loginUser(req, res) {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
            });
        }

        const user = await  UserService.loginUser(email, password);

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                email: user.email,
                token: user.token,
                user: {
                    email: user.email,
                    token: user.token, // Return the JWT token
                },
            },
        }); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Login failed',
            error: {
                explanation: [error.message],
            },
        });
    }
}

module.exports = {  
    registerUser,
    loginUser
};