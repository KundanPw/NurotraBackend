
const { StatusCodes } = require('http-status-codes');

const getInfo = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'API is alive', 
        error: {}, 
        data: {}
    });
}

module.exports = {
    getInfo
}