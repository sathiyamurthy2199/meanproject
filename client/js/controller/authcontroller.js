app.controller("AuthController",['$scope','$location','LoginService','$rootScope','$http',function ($scope,$location,LoginService,$rootScope,$http) {
    $scope.login = function() {
            
        var username=$scope.username;
        var password=$scope.password;
        LoginService.login(username,password).then(function(data,err){
         
        $rootScope.current_user = data.username;
                $rootScope.sess = data;
                sessionStorage.setItem('current_user', $rootScope.sess.username);
                $rootScope.current_user = sessionStorage.current_user;
                

        $location.path('/home');
    }).catch(function(data,err){
        alert("Username and password is invalid");
    });
       

            
        };
    $rootScope.signout = function(){
        
        $rootScope.authenticated = false;
        $rootScope.current_user = 'Bambeeq';
        sessionStorage.clear();
    };
    
}]);