const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('penjualan', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
