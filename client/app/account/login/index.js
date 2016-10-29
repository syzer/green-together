import angular from 'angular'
import LoginController from './login.controller'
import './login.css'

export default angular.module('App.login', [])
  .controller('LoginController', LoginController)
  .name;
