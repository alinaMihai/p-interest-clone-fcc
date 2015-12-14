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

        ////////////////

        function addPin(pin) {
        	var deferred=$q.defer();
        	var svc=this;
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
    }
})();