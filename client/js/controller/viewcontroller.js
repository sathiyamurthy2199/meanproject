   app.controller("ViewController", function ($scope, $http, $routeParams) {  
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
  
        $scope.user_detail = response.data;  
  
    })  
  
});  