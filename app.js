const express = require('express');
const app = express();
const sequelize = require('./database');
const Sales = require('./Sales');

// Endpoint untuk penjualan bulanan
app.get('/api/sales/monthly', async (req, res) => {
    const [results] = await sequelize.query(`
        SELECT MONTH(SalesDate) as month, SUM(SalesAmount) as totalSales
        FROM Sales
        GROUP BY MONTH(SalesDate)
    `);
    res.json(results);
});

// Endpoint untuk penjualan tahunan
app.get('/api/sales/yearly', async (req, res) => {
    const [results] = await sequelize.query(`
        SELECT YEAR(SalesDate) as year, SUM(SalesAmount) as totalSales
        FROM Sales
        GROUP BY YEAR(SalesDate)
    `);
    res.json(results);
});

// Endpoint untuk penjualan berdasarkan salesperson
app.get('/api/sales/salesperson', async (req, res) => {
    const [results] = await sequelize.query(`
        SELECT SalesPersonID, SUM(SalesAmount) as totalSales
        FROM Sales
        GROUP BY SalesPersonID
    `);
    res.json(results);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
