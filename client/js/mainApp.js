var app = angular.module("app", ['ngRoute']);

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
			.when('/home/:id',{
				templateUrl : '../views/user-detail.html',
				controller  : 'ViewController',
				parent      : '/home'
			})
			.when('/edit/:id', {
				templateUrl : '../views/edit.html',
				controller : 'EditController'
			})
			.when('/create', {
				templateUrl : '../views/create.html',
				controller : 'RegisterController'
			})

		 .otherwise({redirectTo: '/login'});
	}]);
