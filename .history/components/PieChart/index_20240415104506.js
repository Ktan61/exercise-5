import styles from './PieChart.module.css'
import { Pie } from 'react-chartjs-2'

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

export default function PieChart() {
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
                    borderColor: [
                        'rgba(255, 0, 0, 0.4)',
                        'rgba(0, 0, 255, 0.4)',
                        'rgba(255, 255, 255, 0.4)',
                        'rgba(0, 255, 255, 0.4)',
                        'rgba(255, 0, 255, 0.4)',
                        'rgba(255, 255, 0, 0.4)'    
                    ],
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.4)',
                        'rgba(0, 0, 255, 0.4)',
                        'rgba(255, 255, 0, 0.4)',
                        'rgba(0, 255, 0, 0.4)',
                        'rgba(255, 0, 255, 0.4)',
                        'rgba(255, 255, 0, 0.4)'    
                    ],
                    borderWidth: 1                    
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
                    text: "Voting"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <>
            <Pie data={chartData} options={chartOptions} style={{width: "50px", height: "30px"}}/>
        </>
    )
}