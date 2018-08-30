app.controller("RegisterController",['$scope','RegisterService','$location', function ($scope,RegisterService,$location) {
    $scope.signup = function() {
        console.log("Signin");
        var userid=$scope.userid;
        var firstname=$scope.firstname;
        var lastname=$scope.lastname;
        var username=$scope.username;
        var password=$scope.password;
        RegisterService.signup(userid,firstname,lastname,username,password)
        .then(function(data,err){
        
        $location.path('/home');
    });
        
    }
    
}]);
