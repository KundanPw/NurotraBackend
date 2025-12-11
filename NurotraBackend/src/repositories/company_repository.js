const CrudRepository = require('./crud_repository');

const {Company} = require('../models');

class CompanyRepository extends CrudRepository{
    constructor(){
        super(Company);
    }
}

module.exports = CompanyRepository;