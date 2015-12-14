'use strict';

angular.module('pInterestCloneApp')
  .controller('MainCtrl',['PinService', function (PinService) {
    var vm=this;
    vm.pins=PinService.pins;
    activate();

    function activate(){
       PinService.getAllPins().then(function(pins){
          vm.pins=pins;
       });
    }
  }]);
