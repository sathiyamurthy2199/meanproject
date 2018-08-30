angular.module('app').factory('RegisterService', function($http, $q) {
    
    return {
      signup: signup
    };
<<<<<<< HEAD
    function signup(firstname,lastname,username,password){
=======
    function signup(userid,firstname,lastname,username,password){
>>>>>>> 1de99c9... all commited!
    var deferred = $q.defer();
     $http({
        url: 'http://localhost:3000/signup',
        method: "POST",
<<<<<<< HEAD
        data: {'firstname': firstname,'lastname': lastname,'username': username, 'password': password}
=======
        data: {'userid':userid,'firstname': firstname,'lastname': lastname,'username': username, 'password': password}
>>>>>>> 1de99c9... all commited!
    })
    .success(function(response) {
            deferred.resolve(response);
    }).error(function(err) {
<<<<<<< HEAD
      deferred.reject(err); 
=======
      deferred.reject(err);	
>>>>>>> 1de99c9... all commited!
   });
        return deferred.promise;
    }
  });