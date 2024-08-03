const { Sequelize } = require('sequelize');
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql'
});

module.exports = sequelize;
