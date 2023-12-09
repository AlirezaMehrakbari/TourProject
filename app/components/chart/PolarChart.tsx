import React from "react";
import {PolarArea} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    RadialLinearScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    defaults
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    RadialLinearScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)
defaults.responsive = true
function PolarChart({chartData}: any) {
    return <PolarArea data={chartData}/>;
}

export default PolarChart;
