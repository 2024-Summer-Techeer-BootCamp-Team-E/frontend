import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

const data = {
  labels: ['원래 총 가격', '할인된 총 가격'],
  datasets: [
    {
      label: '',
      data: [120000, 56000],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
}
function DoughnutChat() {
  return (
    <div className="flex items-center justify-center h-auto">
      <div className="relative w-full h-64 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl sm:h-80 md:h-96 lg:h-112 xl:h-128">
        <Doughnut data={data} options={options} />
        <span className="absolute pt-6 pl-4 text-3xl transform translate-x-1/2 translate-y-1/2 sm:text-4xl sm:pl-1 xl:text-5xl bottom-1/2 right-1/2">40%</span>
      </div>
    </div>
  )
}

export default DoughnutChat
