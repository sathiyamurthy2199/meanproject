app.controller("MainController",['$scope','$http','MainService', function ($scope,$http,MainService) {
    $scope.view=function(firstname,lastname,username,password){
<<<<<<< HEAD
        $scope.user={'firstname': firstname, 'lastname': lastname, 'username': username, 'password': password}
    
=======
		$scope.user={'firstname': firstname, 'lastname': lastname, 'username': username, 'password': password}
	
>>>>>>> 1de99c9... all commited!
  
            $http({
            url: '/findallUsers',
            method: "GET",
            data: $scope.user
    })
        .then(function(response) {
           
<<<<<<< HEAD
            console.log(response.data);
=======
           
>>>>>>> 1de99c9... all commited!
            $scope.user=response.data;
            
            
        })

<<<<<<< HEAD
         
        };
=======
		 
		};
>>>>>>> 1de99c9... all commited!
           
    }]);

       
       
    
     