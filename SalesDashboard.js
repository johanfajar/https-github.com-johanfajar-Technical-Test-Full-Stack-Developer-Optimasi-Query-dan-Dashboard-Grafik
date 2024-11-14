import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';

function SalesDashboard() {
    const [monthlySales, setMonthlySales] = useState([]);
    const [yearlySales, setYearlySales] = useState([]);
    const [salesByPerson, setSalesByPerson] = useState([]);

    useEffect(() => {
        // Fetch data dari API
        axios.get('http://localhost:3000/api/sales/monthly').then(response => setMonthlySales(response.data));
        axios.get('http://localhost:3000/api/sales/yearly').then(response => setYearlySales(response.data));
        axios.get('http://localhost:3000/api/sales/salesperson').then(response => setSalesByPerson(response.data));
    }, []);

    // Data untuk grafik bulanan
    const monthlyData = {
        labels: monthlySales.map(data => `Month ${data.month}`),
        datasets: [{
            label: 'Monthly Sales',
            data: monthlySales.map(data => data.totalSales),
            backgroundColor: 'rgba(75,192,192,0.4)',
        }]
    };

    // Data untuk grafik tahunan
    const yearlyData = {
        labels: yearlySales.map(data => `Year ${data.year}`),
        datasets: [{
            label: 'Yearly Sales',
            data: yearlySales.map(data => data.totalSales),
            backgroundColor: 'rgba(153,102,255,0.4)',
        }]
    };

    // Data untuk grafik penjualan per salesperson
    const salesPersonData = {
        labels: salesByPerson.map(data => `SalesPerson ${data.SalesPersonID}`),
        datasets: [{
            label: 'Sales by Salesperson',
            data: salesByPerson.map(data => data.totalSales),
            backgroundColor: 'rgba(255,159,64,0.4)',
        }]
    };

    return (
        <div>
            <h1>Sales Dashboard</h1>
            <div style={{ width: '600px', margin: 'auto' }}>
                <h2>Monthly Sales</h2>
                <Bar data={monthlyData} />

                <h2>Yearly Sales</h2>
                <Line data={yearlyData} />

                <h2>Sales by Salesperson</h2>
                <Bar data={salesPersonData} />
            </div>
        </div>
    );
}

export default SalesDashboard;
