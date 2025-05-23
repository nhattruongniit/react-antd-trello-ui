import React from 'react'
import Chart from "react-apexcharts";

function MemberReport() {
  const options = {
    chart: {
      type: 'bar',
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['tony', 'patrick', 'antony'],
      labels: {
        formatter: function (val) {
          return val
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val 
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 20
    },
  }

  const series = [
    {
      name: 'Todo',
      data: [44, 20, 10],
    },
    {
      name: 'In process',
      data: [13, 1, 3],
    },
    {
      name: 'Review',
      data: [11, 5, 3],
    },
    {
      name: 'Done',
      data: [3, 0, 2],
    },
  ];
  
  return (
   <div style={{ maxHeight: 330 }}>
      <Chart
        options={options}
        series={series}
        type='bar'
        height={330}
      />
    </div>
  )
}

export default MemberReport