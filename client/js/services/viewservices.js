angular.module('app').factory('MainService', function($http, $rootScope, $location, $q,$routeParams) {
    
    return {
      viewone: viewone
    };
    function viewone(){
  var deferred = $q.defer();
      // return username == 'sathiya' && password == '100133' ? true : false;
     $http({
          url: 'http://localhost:3000/findoneUser/',
          params: { _id: $routeParams.id },
          method: "GET"
        
            })
      .success(function(response) {
          deferred.resolve(response);
    }).error(function(err) {
          deferred.reject(err); 
    });
        return deferred.promise;
    }
  });