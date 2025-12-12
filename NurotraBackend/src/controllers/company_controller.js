const { StatusCodes } = require('http-status-codes');

const {CompanyService} = require('../services');
const{SuccessResponse, ErrorResponse} = require('../utils/common');

async function createCompany(req, res) {
    try {
         const company = await CompanyService.createCompany({
            nuroId: req.body.nuroId,
            websiteOrInstagram: req.body.websiteOrInstagram,
            companyType: req.body.companyType,
            contactInfo: req.body.contactInfo
        });
        SuccessResponse.data = company;
        return res
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(ErrorResponse);
    }
}

module.exports = {
    createCompany,
}