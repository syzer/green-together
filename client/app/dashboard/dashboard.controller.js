'use strict';
// @flow


export default class DashboardController {
  user: User = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    address: '',
    city: 'Zurich'
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
    this.cities =  [
      'Basel',
      'Paris',
      'Zurich'
    ]
  }

  changeCity(city) {
    console.log(city)
    this.user.city = city;
  }

  changePassword(form) {
    this.submitted = true;

    if(form.$valid) {
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
