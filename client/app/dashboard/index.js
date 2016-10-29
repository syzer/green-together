import angular from 'angular'
import routes from './dashboard.routes'
import DashboardController from './dashboard.controller'
import chart from 'angular-chart.js'
import './dashboard.css'

export default angular.module('App.dashboard', ['App.auth', 'ui.router', 'chart.js'])
  .config(routes)
  .controller('DashboardController', DashboardController)
  .name;
