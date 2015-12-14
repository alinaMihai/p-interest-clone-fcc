'use strict';

angular.module('pInterestCloneApp')
  .controller('MainCtrl',['PinService','angularGridInstance', function (PinService, angularGridInstance) {
    var vm=this;
    vm.pins=PinService.pins;
    vm.masonryOptions={
      "columnWidth":".grid-sizer",
      "itemSelector":".item",
      "isFitWidth":true
    };
    activate();

    function activate(){
       PinService.getAllPins().then(function(pins){
          vm.pins=pins;
       });
    }
    function refresh(){
         angularGridInstance.gallery.refresh();
    }
  }]);
