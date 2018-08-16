angular.module('app').factory('RegisterService', function($http, $q) {
    
    return {
      signup: signup
    };
    function signup(firstname,lastname,username,password){
    var deferred = $q.defer();
     $http({
        url: 'http://localhost:3000/signup',
        method: "POST",
        data: {'firstname': firstname,'lastname': lastname,'username': username, 'password': password}
    })
    .success(function(response) {
            deferred.resolve(response);
    }).error(function(err) {
      deferred.reject(err);	
   });
        return deferred.promise;
    }
  });