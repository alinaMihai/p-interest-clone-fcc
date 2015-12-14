(function() {
    'use strict';

    angular
        .module('pInterestCloneApp')
        .controller('UserPinCtrl', UserPinCtrl);

    UserPinCtrl.$inject = ['PinService','$stateParams'];

    /* @ngInject */
    function UserPinCtrl(PinService,$stateParams) {
        var vm = this;
       vm.userPins=[];
        activate();

        ////////////////

        function activate() {
        	PinService.getUserPins($stateParams.user).then(function(pins){
        	 	vm.userPins=pins;
        	});
        }
    }
})();