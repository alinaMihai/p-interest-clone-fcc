'use strict';

angular.module('pInterestCloneApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('MyPins', {
        url: '/myPins/',
        templateUrl: 'app/myPins/myPins.html',
        controller: 'MyPinCtrl as vm'
      });
  });