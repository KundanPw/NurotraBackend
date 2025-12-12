'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    nuroId: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    websiteOrInstagram: {
      type:DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    companyType: {
      type:DataTypes.ENUM("Startup", "Small Business", "Medium", "Enterprise"),
      allowNull: false
    },
    contactInfo: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};