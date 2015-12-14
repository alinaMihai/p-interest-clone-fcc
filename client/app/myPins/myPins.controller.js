(function() {
    'use strict';

    angular
        .module('pInterestCloneApp')
        .controller('MyPinCtrl', MyPinCtrl);

    MyPinCtrl.$inject = ['PinService','$scope'];

    /* @ngInject */
    function MyPinCtrl(PinService,$scope) {
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
            $scope.$watch(
                function(){return PinService.added;},
                function(newVal,oldVal){
                    if(newVal!==oldVal){
                        vm.myPins.push(newVal);
                    }
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