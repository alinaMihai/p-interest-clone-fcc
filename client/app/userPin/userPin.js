'use strict';

angular.module('pInterestCloneApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('UserPins', {
        url: '/userPins/:user',
        templateUrl: 'app/userPin/userPin.html',
        controller: 'UserPinCtrl as vm'
      });
  });