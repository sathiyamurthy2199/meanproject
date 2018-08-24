   app.controller("ViewController", function ($scope, $http, $routeParams) {  
    console.log("hai");
    $http({  
        url: '/findoneUser/'+$routeParams.id,  
        params: { id :$routeParams.id },  
        method:"get"  
    })  
    .then(function (response) {  
        console.log(response);
  
        $scope.user_detail = response.data;  
  
    })  
  
});  