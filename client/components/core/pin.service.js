(function() {
    'use strict';

    angular
        .module('pInterestCloneApp')
        .service('PinService', PinService);

    PinService.$inject = ['$http','$q'];

    /* @ngInject */
    function PinService($http,$q) {
    	this.pins=[];
        this.addPin = addPin;
        this.getAllPins=getAllPins;
        var svc=this;
        ////////////////

        function addPin(pin) {
        	var deferred=$q.defer();
        	
        	$http.post('/api/pins',pin)
        	.success(function(pin){
 				svc.pins.push(pin);
        		deferred.resolve(pin);
        	})
        	.error(function(err){
        		deferred.reject(err);
        	});

        	return deferred.promise;
        }

        function getAllPins(){
            var deferred=$q.defer();
            $http.get('api/pins')
            .success(function(pins){
                svc.pins=pins;
                deferred.resolve(pins);
            }).error(function(err){
                deferred.reject(err);
            });
            return deferred.promise;
        }
    }

})();