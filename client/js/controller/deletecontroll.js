app.controller("DeleteController",['$scope','$location','$http','$routeParams',function ($scope,$location,$http,$routeParams) {
    $scope.deleteUser=function(){
    	console.log("hai");
    
    $http({  
        url: '/deleteUser/'+$routeParams.id,  
        params: { id :$routeParams.id },  
        method:"delete"  
    }) 
    $location.path('/home');
    alert("user deleted successfully");
}
}]);