app.controller("MainController",['$scope','$http',function ($scope,$http) {	
	

    $http({
        url: '/findallUsers',
        method: "GET",
        data: $scope.user
    })
         .then(function(response) {
           
            console.log(response.data);
            $scope.user=response.data;
            var obj=response.data;
            console.log(obj[0].firstname);
            
        }) 



    $scope.view=function(firstname,lastname,username,password){
		console.log("VIEW");
		$scope.user={'firstname': firstname, 'lastname': lastname, 'username': username, 'password': password}
		// var user=$scope.user;
  
        $http({
        url: '/findallUsers',
        method: "GET",
        data: $scope.user
    })
         .then(function(response) {
           
            console.log(response.data);
            $scope.user=response.data;
            var obj=response.data;
            console.log(obj[0].firstname);
            
        })

		 
		}
        }]);





// 	$http.get('http://localhost:3000/findallUsers').
//         then(function(response) {
//             $scope.user = response.data;
//         });
//     }
// }]);
