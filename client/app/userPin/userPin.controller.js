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
        vm.handleImageError=handleImageError;
        vm.user=$stateParams.user;
        activate();

        ////////////////

        function activate() {
        	PinService.getUserPins(vm.user).then(function(pins){
        	 	vm.userPins=pins;
        	});
        }
         function handleImageError(pin){
          pin.imageUrl='../../assets/images/placeholder.gif';
        }
    }
})();