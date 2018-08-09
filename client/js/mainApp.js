var app = angular.module("app", ['ngRoute']);
console.log("HERE");
app.config(['$routeProvider',function($routeProvider) {
		$routeProvider
		.when('/home', {
			templateUrl : '../views/home.html',
			controller : 'MainController'
		})

			// route for the login page
			.when('/login', {
				templateUrl : '../views/login.html',
				controller  : 'AuthController'
			})

			// route for the register page
			.when('/register', {
				templateUrl : '../views/register.html',
				controller  : 'RegisterController'
			})

		 .otherwise({redirectTo: '/login'});
	}]);
