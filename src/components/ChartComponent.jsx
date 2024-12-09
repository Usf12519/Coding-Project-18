import React, {useEffect, useRef } from 'react';
import { chart } from 'chart.js' ;

const ChartComponent = ({type, data, options}) => {
    const chartRef = useRef(null);
    const chartInstance =useRef(null);
};

useEffect(()) = {
    if (chartInstance.current) {
        chartInstance.current.destroy();
    }
};

chartInstance.current = new Chart(chartRef.current), {
    type: type,
    data: data,
    options: options,
}
