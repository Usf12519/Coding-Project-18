import React from 'react';
import ChartComponent from './ChartCompnent';

const BarChart = () => {
    const data = {
        labels: [ 'January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Monthly Sales' ,
                data: [4000, 3000, 3500, 5000, 4500],
                backgroundcolor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)'
                borderWidth: 1,
            },
        ],
    },
};


