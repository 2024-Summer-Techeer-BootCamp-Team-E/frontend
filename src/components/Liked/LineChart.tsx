import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

const data = {
  labels: ['의류', '스포츠', '생활용품', '가전', '가전', '음식'],
  datasets: [
    {
      label: '',
      data: [1, 1, 1, 4, 5, 6],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
    },
  ],
}

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

function LineChart() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-1/2">
        <Doughnut data={data} options={options} />
        {/* <span className="absolute text-5xl bottom-40 right-36">10 %</span> */}
      </div>
    </div>
  )
}

export default LineChart