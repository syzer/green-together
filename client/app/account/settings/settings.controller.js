'use strict';
// @flow

type User = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default class SettingsController {
  user: User = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    address: '',
    city: 'Zurich',
    car: ''
  };
  errors = {
    other: undefined
  };
  message = '';
  submitted = false;
  Auth;

  /*@ngInject*/
  constructor(Auth) {
    this.Auth = Auth;
    this.cities = [
      'Basel',
      'Paris',
      'Zurich'
    ]

    this.cars = [
      'A3 Sportback e-tron®',
      'A4 allroad®',
      'Q3',
      'Q5',
      'Q5 hybrid',
      'SQ5',
      'Q7'
    ]
  }

  changeCity(city) {
    this.user.city = city
  }

  changeCar(car) {
    this.user.car = car
    // FUU
    this.user.carMilesPerGallon = 25
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}
