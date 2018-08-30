   app.controller("ViewController", function ($scope, $http, $routeParams) {  
   	
    $http({  
        url: '/findoneUser/'+$routeParams.id,  
        params: { id :$routeParams.id },  
        method:"get"  
    })  
    .then(function (response) {  
    	
  
        $scope.user_detail = response.data;  
  
    })  
  
});  