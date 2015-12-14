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
        activate();

        ////////////////

        function activate() {
        	PinService.getMyPins().then(function(pins){
        	    vm.myPins=pins;
        	});
        }
    }
})();