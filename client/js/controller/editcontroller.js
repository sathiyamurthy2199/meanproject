app.controller("EditController",['$scope','$location','$http','$routeParams','EditService',function ($scope,$location,$http,$routeParams,EditService) {
    
    	console.log("hai");
    $http({  
        url: '/findoneUser/'+$routeParams.id,  
        params: { id :$routeParams.id },  
        method:"get"  
    })  
    .then(function (response) {  
    	console.log(response);
  
        $scope.user = response.data;  
  
    })  
    $scope.updateUser=function() {
    	 var firstname=$scope.user.firstname;
        var lastname=$scope.user.lastname;
        var username=$scope.user.username;
        var password=$scope.user.password;
        EditService.updateUser(firstname,lastname,username,password).then(function(data,err){

        $location.path('/home');
    })

    .then(function (response) {  
    	console.log(response);
    })
}
  
}]);