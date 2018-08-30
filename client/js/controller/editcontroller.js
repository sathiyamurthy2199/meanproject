app.controller("EditController",['$scope','$location','$http','$routeParams','EditService',function ($scope,$location,$http,$routeParams,EditService) {
    
<<<<<<< HEAD
    	console.log("hai");
=======
>>>>>>> 1de99c9... all commited!
    $http({  
        url: '/findoneUser/'+$routeParams.id,  
        params: { id :$routeParams.id },  
        method:"get"  
    })  
    .then(function (response) {  
<<<<<<< HEAD
    	console.log(response);
=======
>>>>>>> 1de99c9... all commited!
  
        $scope.user = response.data;  
  
    })  
    $scope.updateUser=function() {
<<<<<<< HEAD
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
=======
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

    
>>>>>>> 1de99c9... all commited!
}
  
}]);