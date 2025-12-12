const { StatusCodes } = require('http-status-codes');

const{CompanyRepository} = require('../repositories');

const AppError = require('../utils/error/app-error');

const companyRepository = new CompanyRepository();

async function createCompany(data){
    try {
        const company = await companyRepository.create(data);
        return company;
    } catch (error) {
        throw new AppError('Can not create company', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCompany,
}
