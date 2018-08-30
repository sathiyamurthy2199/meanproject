app.controller("RegisterController",['$scope','RegisterService','$location', function ($scope,RegisterService,$location) {
    $scope.signup = function() {
        console.log("Signin");
<<<<<<< HEAD
=======
        var userid=$scope.userid;
>>>>>>> 1de99c9... all commited!
        var firstname=$scope.firstname;
        var lastname=$scope.lastname;
        var username=$scope.username;
        var password=$scope.password;
<<<<<<< HEAD
        RegisterService.signup(firstname,lastname,username,password)
        .then(function(data,err){
        console.log(data);
=======
        RegisterService.signup(userid,firstname,lastname,username,password)
        .then(function(data,err){
        
>>>>>>> 1de99c9... all commited!
        $location.path('/home');
    });
        
    }
    
}]);
