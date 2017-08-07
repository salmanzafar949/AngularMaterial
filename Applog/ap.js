var application = angular.module('loginapp',['ngRoute']);
application.config(function($routeProvider)

	{

		$routeProvider.when('/',
		{
			templateUrl: 'login.html'
		})
		.when('/dashboard',
		{

			templateUrl: 'dashboard.html'
		})
		.otherwise(
		{

			redirectTo: '/'

		});



	});
application.controller('logctrl',function($scope, $location)
	{
		$scope.submit= function()
		{
			var uname = $scope.username;
			var password = $scope.password;

			if ($scope.username == 'salman' && $scope.password == '125') 
			{

				$location.path('/dashboard');
			}
			else
			{
				alert ('Wrong Stuff');
			}
		}
	});