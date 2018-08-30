angular.module('app').factory('EditService', function($http, $rootScope, $location, $q,$routeParams) {
    
    return {
      updateUser: updateUser
    };
<<<<<<< HEAD
    function updateUser(firstname,lastname,username,password){
=======
    function updateUser(userid,firstname,lastname,username,password){
>>>>>>> 1de99c9... all commited!
      var deferred = $q.defer();
      // return username == 'sathiya' && password == '100133' ? true : false;
      $http({  
        url: '/updateUser/'+$routeParams.id,   
        method:"put",
<<<<<<< HEAD
        data : {'firstname':firstname,'lastname':lastname,'username':username,'password':password}  
=======
        data : {'userid':userid,'firstname':firstname,'lastname':lastname,'username':username,'password':password}  
>>>>>>> 1de99c9... all commited!
    })  
      .success(function(response) {
            deferred.resolve(response);
    }).error(function(err) {
        deferred.reject(err); 
    });
        return deferred.promise;
    }
  });