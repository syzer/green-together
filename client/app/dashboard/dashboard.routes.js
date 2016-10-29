'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('dashboard', {
    url: '/dashboard',
    template: require('./dashboard.html'),
    controller: 'AdminController',
    controllerAs: 'admin',
    authenticate: 'admin'
  });
}
