const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Try = sequelize.define('try', {
  id : {
    type : Sequelize.INTEGER,
    allowNull : false,
    autoIncrement : true,
    primaryKey : true
  },
  name : Sequelize.STRING,
  email : {
    type : Sequelize.STRING,
    unique : true
  },
  phonenumber :{
    type : Sequelize.STRING,
    unique : true
}

});

module.exports = Try;