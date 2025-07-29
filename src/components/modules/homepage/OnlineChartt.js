"use client"
import dynamic from 'next/dynamic';
import React from 'react';
// import ReactApexChart from 'react-apexcharts';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false
})

const HomeChart = () => {
  const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  const data = [58000000, 61000000, 67000000, 66000000, 74000000, 84000000, 87000000, 92000000, 95000000, 102000000, 106000000, 108000000];

  const [state, setState] = React.useState({
    series: [
      {
        name: 'قیمت طلا',
        data: data
      }
    ],
    options: {
      chart: {
        type: 'area', // یا 'line' بسته به نیازت
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#D2AB67'] // رنگ خط
      },
      fill: {
        colors: ['#D2AB67'], // رنگ ناحیه (حالت پر شده)
        opacity: 0.3 // در صورت نیاز شفافیت
      },
      title: {
        text: 'نمودار قیمت طلا در ماه‌ها',
        align: 'left'
      },
      labels: labels,
      xaxis: {
        categories: labels,
        type: 'category'
      },
      yaxis: {
        title: {
          text: 'قیمت (تومان)'
        }
      },
      legend: {
        horizontalAlign: 'left'
      }
    }
  });

  return (
    <div className='w-full md:max-w-[805px] mx-auto pt-7 h-full'>
      <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
    </div>
  );
};

export default HomeChart;