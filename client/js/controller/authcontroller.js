app.controller("AuthController",['$scope','$location','LoginService',function ($scope,$location,LoginService) {
    $scope.login = function() {
            
        var username=$scope.username;
        var password=$scope.password;
        LoginService.login(username,password).then(function(data,err){
        console.log(data); 
        $location.path('/home');
    }).catch(function(data,err){
        alert("Username and password is invalid");
    });
       

            
        };
    
}]);


// alert("hai" + " " + $scope.username + " " + "your password is" + $scope.password);
// $scope.loginData = {username: $scope.username, password: $scope.password};
        
//         $http({
//         url: '/login',
//         method: "POST",
//         data: $scope.loginData 
//     })
//     .then(function(response) {
           
//             console.log(response.data.user);
//     });

// };
// $scope.signup = function(){
//     $scope.loginData = {firstname: $scope.firstname, lastname: $scope.lastname, username: $scope.username, password: $scope.password};

//     $http({
//         url: '/signup',
//         method: "POST",
//         data: $scope.loginData
//     })
//     .then(function(response){
//         console.log(response.data.username);
//     });
// };

// });