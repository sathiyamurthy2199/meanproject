app.controller("EditController",['$scope','$location','$http','$routeParams','EditService',function ($scope,$location,$http,$routeParams,EditService) {
    
    $http({  
        url: '/findoneUser/'+$routeParams.id,  
        params: { id :$routeParams.id },  
        method:"get"  
    })  
    .then(function (response) {  
  
        $scope.user = response.data;  
  
    })  
    $scope.updateUser=function() {
        var userid=$scope.user.userid;
    	var firstname=$scope.user.firstname;
        var lastname=$scope.user.lastname;
        var username=$scope.user.username;
        var password=$scope.user.password;
        EditService.updateUser(userid,firstname,lastname,username,password).then(function(data,err){
            alert("User updated successfully");
        $location.path('/home');
    }).catch(function(err){
        alert("Some error is occured");
    })

    
}
  
}]);