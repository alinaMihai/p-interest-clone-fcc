(function() {
    'use strict';

    angular
        .module('pInterestCloneApp')
        .controller('MyPinCtrl', MyPinCtrl);

    MyPinCtrl.$inject = ['PinService'];

    /* @ngInject */
    function MyPinCtrl(PinService) {
        var vm = this;
        vm.pins=[];
        vm.deletePin=deletePin;
        vm.handleImageError=handleImageError;
        activate();

        ////////////////

        function activate() {
        	PinService.getMyPins().then(function(pins){
        	    vm.myPins=pins;
        	});
        }

        function deletePin(pin){
            var myPin=pin;
            PinService.deletePin(pin._id).then(function(){
                var index=_.findIndex(vm.myPins,{_id:myPin._id});
                vm.myPins.splice(index,1);    
            });
        }
         function handleImageError(pin){
           pin.imageUrl='../../assets/images/placeholder.gif';
        }
    }
})();