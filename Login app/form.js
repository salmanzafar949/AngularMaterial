var app = angular.module('loginapp',['ngRoute']);

app.config(function($routeProvider)

{

	$routeProvider
	             .when('/',
	             {

	             	templateUrl: 'lform.html',
	             	controller:   'loginctrl'

	             })

	             .when('/dashboard',
	             {

	             	templateUrl: 'dashoard.html'
	             })

	             .otherwise(
	             	{

	             		redirectTo: '/'
	             	});


}


	);

app.controller('loginctrl',function($scope, $location)
	{
		$scope.submit=function()
		{
			var uname = $scope.username;
			var password = $scope.password;

			if ($scope.username == 'admin' && $scope.password == 'admin') 
			{
				$location.path('/dashoard');
			}
			else
			{
				alert('wrong stuff');
			}
		}
	});