import styles from './PieChart.module.css'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function VerticalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.4)',
                        'rgba(0, 0, 255, 0.4)',
                        'rgba(255, 255, 255, 0.4)',
                        'rgba(0, 255, 255, 0.4)',
                        'rgba(255, 0, 255, 0.4)',
                        'rgba(255, 255, 0, 0.4)'    
                    ]                    
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                }, 
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <>
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </>
    )
}