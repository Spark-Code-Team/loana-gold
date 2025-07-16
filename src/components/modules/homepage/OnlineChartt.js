// import Image from "next/image";

// const OnlineChartt = () => {
//     return (

//         <>

//             <div className="md:w-1/2 w-full flex justify-center items-center lg:mt-20 mt-10">

//                 <div className="md:w-[90%] w-full m-auto md:pr-0 md:pl-0 pr-10 pl-10">

//                     <Image src="/images/chart.png" alt="" width={600} height={412} layout="responsive"/>

//                 </div>

//             </div>

//         </>

//     )
// }

// export default OnlineChartt;
"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const HomeChart = () => {
  const data = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    datasets: [
      {
        label: 'قیمت طلا',
        data: [58000000, 61000000, 67000000, 66000000, 74000000, 84000000, 87000000, 92000000, 95000000, 102000000, 106000000, 108000000],
        fill: false,
        borderColor: '#D2AB67',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        tension: 0.6,
      },
    ],
  };

const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            weight: 'bold',
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#000',
          font: {
            weight: 'bold',
          },
        },
      },
      x: {
        ticks: {
          color: '#000',
          font: {
            weight: 'bold',
          },
        }
      },
    },
    elements: {
        point: {
          radius: 5,
          padding:2,
          borderColor: "#fff",
          borderWidth: 3,  
          backgroundColor: '#D2AB67',
        },
      },
  };
  return (
  <div className='w-full md:max-w-[805px] mx-auto pt-7 h-full'>
    <Line data={data} options={options} />
  </div>
)
};

export default HomeChart;