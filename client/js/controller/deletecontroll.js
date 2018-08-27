app.controller("DeleteController",['$scope','$location','$http','$routeParams','$window',function ($scope,$location,$http,$routeParams,$window) {
    $scope.deleteUser=function(){
    	console.log("hai");
    	var deleteUser = $window.confirm('Are you absolutely sure you want to delete?');
    
    if (deleteUser) {
    $http({  
        url: '/deleteUser/'+$routeParams.id,  
        params: { id :$routeParams.id },  
        method:"delete"  
    }) 
    $location.path('/home');
    alert("user deleted successfully");
} 
}
}]);