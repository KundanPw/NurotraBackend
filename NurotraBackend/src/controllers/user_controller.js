const { StatusCodes } = require('http-status-codes');
const { UserService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

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

module.exports = {  
    registerUser
};