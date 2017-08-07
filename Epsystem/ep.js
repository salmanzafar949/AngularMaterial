var app = angular.module('epApp', ['ngRoute']);
app.config(function($routeProvider)
	{

		$routeProvider
		             .when('/',
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
		             	templateUrl: 'home.html'
		             })
		             .when('/login',
		             {
		             	templateUrl: 'signin.html'
		             })
		             .when('/dashboard',
		             {
		             	templateUrl: 'dashboard.html'
		             })
		             .when('/aboutus',
		             {
		             	templateUrl: 'aboutus.html'
		             })
		             .otherwise(
		             {
		             	redirectTo: '/'
		             })
	});

app.controller('epctrl',function($scope, $location, $rootScope, $http)
{            

	$http.get('http://localhost/Epsystem/epdb.json')
	.success(function(response)
		{
			$scope.datas= response.data
		});
	        $scope.searchbar = 'Search';
            $scope.abc = 'enter username';
            $scope.abc1 = 'enter password';
			$scope.b = {

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
