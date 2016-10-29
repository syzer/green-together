'use strict';
// @flow

import chart from 'angular-chart.js'

export default class DashboardController {
  Auth;
  labels;
  series;
  data;
  options;

  /*@ngInject*/
  constructor(Auth/*, chart*/) {
    this.Auth = Auth
    this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    this.series = ['David Perry (you)', 'Tscherina Janisch']
    this.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ]

    this.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    }

    this.pieChartLabels = ['Car', 'Walk', 'Bike', 'Public treansportation']
    this.pieChartData = [300, 500, 100, 100]
    this.pieCHartOptions = {
    }

  }

  onClick(points, evt) {
    console.log(points, evt)
  }

  datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}]

}
