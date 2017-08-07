var app = angular.module('loginapp',['ngRoute']);

app.config(function($routeProvider)

{

	$routeProvider
	             .when('/',
	             {

	             	templateUrl: 'lform.html'

	             })

	             .when('/dashboard',
	             {
	             	resolve: 
	             	{

	             		"check": function($location, $rootScope)
	             		{
	             			if (!$rootScope.loggedIn) 
	             			{
	             				$location.path('/');
	             			}
	             		}

	                },

	             	templateUrl: 'dashboard.html'
	             })

	             .otherwise(
	             	{

	             		redirectTo: '/'
	             	});


}


	);

app.controller('loginctrl',function($scope, $location, $rootScope)
	{
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