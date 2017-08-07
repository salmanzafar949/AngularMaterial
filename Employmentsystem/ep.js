var app = angular.module('epApp',['ngRoute']);
app.config(function($routeProvider)
	{
		$routeProvider.when('/',
		{
			templateUrl: 'SignIn.html'
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

app.controller('epctrl', function($scope, $location, $rootScope)
	{

		$scope.b= {

			background: 'url(b.jpg)'
		};

		console.log($scope.b);
		

		$scope.submit=function()
		{
			

			if ($scope.username == 'admin' && $scope.password == 'admin') 
			{
				$rootScope.loggedIn = true;
				$location.path('/dashboard');
			}
			else
			{
				alert('wrong stuff');
			}
		}

		

	});