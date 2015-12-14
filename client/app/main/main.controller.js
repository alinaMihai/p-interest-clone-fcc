'use strict';

angular.module('pInterestCloneApp')
  .controller('MainCtrl',['PinService','angularGridInstance', function (PinService, angularGridInstance) {
    var vm=this;
    vm.pins=[];
    vm.handleImageError=handleImageError;
    activate();

    function activate(){
       PinService.getAllPins().then(function(pins){
          vm.pins=pins;
       });
       
    }
    function refresh(){
         angularGridInstance.gallery.refresh();
    }
     function handleImageError(pin){
          pin.imageUrl='../../assets/images/placeholder.gif';
        }
  }]);
