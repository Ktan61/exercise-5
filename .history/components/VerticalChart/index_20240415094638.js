import styles from './VerticalChart.module.css'
import { Bar } from 'react-chartjs2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale, 
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'