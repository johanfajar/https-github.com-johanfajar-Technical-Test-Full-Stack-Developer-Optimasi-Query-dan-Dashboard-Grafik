const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Sales = sequelize.define('Sales', {
    SalesID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    SalesDate: DataTypes.DATE,
    ProductID: DataTypes.INTEGER,
    SalesAmount: DataTypes.DECIMAL,
    SalesPersonID: DataTypes.INTEGER
});

module.exports = Sales;