import createElement from '../../helpers/createElement.js';
// import ColumnChart from '../../components/ColumnChart/index.js';
import formatTotal from '../../helpers/formatTotal.js';

const chartsList = [
  {
    type: 'orders',
  },
  {
    type: 'sales',
    formatTotal
  },
  {
    type: 'customers',
  }
];




// new ColumnChart({
//       url: `https://course-js.javascript.ru/api/dashboard/${type}?from=${dates.from}&to=${dates.to}`,
//       title: `Total ${type}`,
//       type,
//       formatTotal
//     }


// (async() => {
//   // Add charts
//   const promisesList = chartsList.map(({type, formatTotal}) => {
//     // Use promises to keep order of charts
//     return new Promise((resolve, reject) => {
//       const chart = new ColumnChart({
//       url: `https://course-js.javascript.ru/api/dashboard/${type}?from=${dates.from}&to=${dates.to}`,
//       title: `Total ${type}`,
//       type,
//       formatTotal
//     });

//     chart.render();
//     resolve(chart.elem);
//     })
//   });

//   const chartElems = await Promise.all(promisesList);
//   chartElems.forEach(chart => document.body.append(chart));
// })();

export default class {
  async render() {
    return createElement(`<div>
        <h1>Dashboard</h1>
        <p>Hello</p>
        <column-chart type="orders"/>
      </div>`
    );
  }
};

