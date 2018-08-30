app.controller("MainController",['$scope','$http','MainService', function ($scope,$http,MainService) {
    $scope.view=function(firstname,lastname,username,password){
		$scope.user={'firstname': firstname, 'lastname': lastname, 'username': username, 'password': password}
	
  
            $http({
            url: '/findallUsers',
            method: "GET",
            data: $scope.user
    })
        .then(function(response) {
           
           
            $scope.user=response.data;
            
            
        })

		 
		};
           
    }]);

       
       
    
     