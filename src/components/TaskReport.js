import Chart from "react-apexcharts";

function TaskReport() {
  const series = [44, 33, 23, 40]; 
  const labels = ["Todo", "In process", "Review - 23", "Done - 40"]

  const options = {
    labels,
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  
  return (
    <div style={{ maxHeight: 330 }}>
      <Chart
        options={options}
        series={series}
        type='pie'
        height={330}
      />
    </div>
  )
}

export default TaskReport