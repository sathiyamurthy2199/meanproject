app.controller("UpdateController",['$scope','$location', function ($scope,$location) {
    $scope.signup = function() {
            console.log("Signin");
        var firstname=$scope.firstname;
        var lastname=$scope.lastname;
        var username=$scope.username;
        var password=$scope.password;
        RegisterService.signup(firstname,lastname,username,password)
        .then(function(data,err){
        console.log(data);
        $location.path('/home');
    });
        
    }
    
}]);
