import { useState } from 'react';
import s from './FormChart.module.css';
import ChartStatistic from '../Chart/ChartStatistic';

const inputTypeRadio = [
  { id: 1, title: 'Bar Chart', value: 'bar' },
  { id: 2, title: 'Line Chart', value: 'line' },
  { id: 3, title: 'Pie Chart', value: 'pie' },
  { id: 4, title: 'Doughnut Chart', value: 'doughnut' },
];

export default function FormChart() {
  const [xlabels, setXlabels] = useState([]);
  const [yvalues, setYvalues] = useState([]);
  const [type, setType] = useState('bar');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'xlabels':
        let labels;
        value.includes(',') ? (labels = value.split(',')) : (labels = value.split(' '));
        setXlabels(labels);
        break;

      case 'yvalues':
        let values;
        value.includes(',') ? (values = value.split(',')) : (values = value.split(' '));
        setYvalues(values);
        break;

      default:
        return;
    }
  };

  const handleChangeR = event => {
    setType(event.target.attributes.value.nodeValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="Xaxis" className={s.field}>
          <span className={s.span}>X axis labels:</span>
          <input
            id="Xaxis"
            type="text"
            name="xlabels"
            className={s.input}
            value={xlabels}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor={'Yaxis'} className={s.field}>
          <span className={s.span}>Y axis values:</span>
          <input
            id={'Yaxis'}
            type="text"
            name="yvalues"
            className={s.input}
            value={yvalues}
            onChange={handleChange}
          ></input>
        </label>
        <ul>
          {inputTypeRadio.map(({ title, value, id }) => {
            return (
              <li key={id} className={s.item}>
                <input
                  type="radio"
                  id={value}
                  name="chart"
                  value={value}
                  className={s.inputradio}
                  onChange={handleChangeR}
                />
                <label htmlFor={value} className={s.itemtext}>
                  {title}
                </label>
              </li>
            );
          })}
        </ul>
      </form>
      <ChartStatistic labels={xlabels} values={yvalues} type={type} />
    </>
  );
}
