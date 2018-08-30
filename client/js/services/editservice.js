angular.module('app').factory('EditService', function($http, $rootScope, $location, $q,$routeParams) {
    
    return {
      updateUser: updateUser
    };
    function updateUser(userid,firstname,lastname,username,password){
      var deferred = $q.defer();
      // return username == 'sathiya' && password == '100133' ? true : false;
      $http({  
        url: '/updateUser/'+$routeParams.id,   
        method:"put",
        data : {'userid':userid,'firstname':firstname,'lastname':lastname,'username':username,'password':password}  
    })  
      .success(function(response) {
            deferred.resolve(response);
    }).error(function(err) {
        deferred.reject(err); 
    });
        return deferred.promise;
    }
  });