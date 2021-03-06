(function(){


'use strict';

angular.module('pInterestCloneApp')
  .controller('NavbarCtrl', ['$scope', '$location', 'Auth','PinService','$modal',
    function ($scope, $location, Auth,PinService,$modal) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/',
      'state':'main'
    },
    {
      'title':'My Pins',
      'link':'/myPins/',
      'state':'MyPins'
    }];
    $scope.openAddPinModal=openAddPinModal;
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    function openAddPinModal(){
      var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'components/navbar/addPin.html',
                size: 'lg',
                controller: 'ModalInstanceCtrl as modalCtrl',
            });

            modalInstance.result.then(function(pin) {
              console.log(pin);
              PinService.addPin(pin);
            }, function() {
                // $log.info('Modal dismissed at: ' + new Date());
            });
    }
  }]);
  angular
        .module('pInterestCloneApp')
        .controller('ModalInstanceCtrl', Controller);

    Controller.$inject = ['$scope', '$modalInstance'];

    /* @ngInject */
    function Controller($scope, $modalInstance) {
        var vm = this;
        vm.pin={};
        vm.ok = okHandler;
        vm.cancel = cancelHandler;
      
        function okHandler() {
            $modalInstance.close(vm.pin);
        }

        function cancelHandler() {
            $modalInstance.dismiss('cancel');
        }

    }


})();
