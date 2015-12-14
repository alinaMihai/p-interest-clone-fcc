(function() {
    'use strict';

    angular
        .module('pInterestCloneApp')
        .service('PinService', PinService);

    PinService.$inject = ['$http','$q','toastr'];

    /* @ngInject */
    function PinService($http,$q,toastr) {
    	this.pins=[];
        this.added=undefined;
        this.addPin = addPin;
        this.getAllPins=getAllPins;
        this.getUserPins=getUserPins;
        this.getMyPins=getMyPins;
        this.deletePin=deletePin;
        var svc=this;
        ////////////////

        function addPin(pin) {
        	var deferred=$q.defer();
        	
        	$http.post('/api/pins',pin)
        	.success(function(pin){
 				svc.pins.push(pin);
                svc.added=pin;
        		deferred.resolve(pin);
                toastr.success('Pin added successfully','Success');
        	})
        	.error(function(err){
        		deferred.reject(err);
        	});

        	return deferred.promise;
        }

        function getAllPins(){
            var deferred=$q.defer();
            $http.get('/api/pins')
            .success(function(pins){
                svc.pins=pins;
                deferred.resolve(pins);
            }).error(function(err){
                deferred.reject(err);
            });
            return deferred.promise;
        }

        function getUserPins(user){
            var deferred=$q.defer();
            $http.get('/api/pins/'+user)
            .success(function(pins){
                deferred.resolve(pins);
            })
            .error(function(err){
                deferred.reject(err);
            });
            return deferred.promise;
        }
        function getMyPins(){
            var deferred=$q.defer();
            $http.get('api/pins/myPins')
            .success(function(pins){
                deferred.resolve(pins);
            })
            .error(function(err){
                deferred.reject(err);
            });
            return deferred.promise;
        }

        function deletePin(id){
             var deferred=$q.defer();
                $http.delete('api/pins/'+id)
                .success(function(){
                    deferred.resolve();
                    toastr.success('Pin deleted successfully','Success');
                })
                .error(function(err){
                    deferred.reject(err);
                });
                return deferred.promise;   
        }
    }

})();