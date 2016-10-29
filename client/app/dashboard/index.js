'use strict';

import angular from 'angular';
import routes from './dashboard.routes';
import DashboardController from './dashboard.controller';

export default angular.module('App.dashboard', ['App.auth', 'ui.router'])
  .config(routes)
  .controller('DashboardController', DashboardController)
  .name;
