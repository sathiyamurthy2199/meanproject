 angular.module('app').factory('LoginService', function($http, $rootScope, $location, $q) {
    
    return {
      login: login
    };
    function login(username,password){
  var deferred = $q.defer();
      // return username == 'sathiya' && password == '100133' ? true : false;
     $http({
        url: 'http://localhost:3000/login',
        method: "POST",
        data: {'username': username, 'password': password}
    })
    .success(function(response) {
            deferred.resolve(response);
    }).error(function(err) {
      deferred.reject(err); 
    });
        return deferred.promise;
    }
  });