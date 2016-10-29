'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, ChartJsProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/login');

  $locationProvider.html5Mode(true);

  Chart.defaults.global.colors = [
    "#21a55f",
    "#98bae2",
    "#00a974",
    // "#00ab7f",
    // "#63b9df",
    "#00b7ce",
    "#00b3ad",
  ]
}
