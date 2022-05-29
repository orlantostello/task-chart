import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Decimation,
  DoughnutController,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  SubTitle,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import colorsDiagram from '../colorsDiagram';
import s from './Chart.module.css';

ChartJS.register(
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Decimation,
  DoughnutController,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  SubTitle,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip,
);

export default function ChartStatistic({ labels, values, type }) {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        type: type,
        label: 'Dataset 1',
        backgroundColor: colorsDiagram,
        borderWidth: 3,
        fill: false,
        data: values,
      },
    ],
  };
  return (
    <div className={s.chartContainer}>
      <Chart options={options} data={data} />
    </div>
    // <Chart options={options} data={data} />
  );
}

ChartStatistic.propTypes = {
  type: PropTypes.string,
  labels: PropTypes.array,
  values: PropTypes.array,
};
