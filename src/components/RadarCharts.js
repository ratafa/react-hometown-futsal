import React from "react";
import {Radar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

export const RadarChart = ({capacity}) => {
    const RadarData = {
        type: 'radar',
        labels: ['공격', '스피드', '몸싸움', '수비', '체력', '패스'],
        datasets: [
            {
                label: '능력치',
                data: capacity.ability,
                backgroundColor: 'rgba(255, 108, 61, 0.3)',
            }
        ],
    };
    const RadarOptions = {
        scales: {
            r: {
                pointLabels: {
                    color: '#414141',
                    font: {
                        size: 12,
                    }
                },
                beginAtZero: true, // 그래프 기준값을 0부터 시작
                ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 5,
                    showLabelBackdrop: false,
                    howLabelBackdrop: false,
                },
            },
        }
    };

    return (
        <Radar data={RadarData} options={RadarOptions}/>
    );
}

