app.controller("ViewController",['$scope','$http',function ($scope,$http) {	
	$scope.viewone=function(firstname,lastname,username,password){
		console.log("VIEW");
		$scope.user={'firstname': firstname, 'lastname': lastname, 'username': username, 'password': password}
		// var user=$scope.user;

		 $http({
        url: '/findoneUser/:userId',
        method: "GET",
        data: $scope.user
    })
		 .then(function(response) {
           
            console.log(response.data);
            $scope.user=response.data;
           
        })
		}
        }]);