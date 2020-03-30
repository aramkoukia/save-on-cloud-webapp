// ##############################
// // // javascript library for creating charts
// #############################
const Chartist = require('chartist');

// ##############################
// // // variables used to create animation on charts
// #############################
const delays = 80;
const durations = 500;

// ##############################
// // // Daily Sales
// #############################

const dailySalesChart = {
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[12, 17, 7, 17, 23, 18, 38]],
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0,
    }),
    low: 0,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70,
    },
  },
};

module.exports = {
  dailySalesChart,
};
