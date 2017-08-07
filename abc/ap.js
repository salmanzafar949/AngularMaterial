var app = angular.module('myapp',[]);
app.controller('dbctrl',function($scope, $http)
	{

		$http.get('http://localhost/abc/db.json')
		.success(function(response)
			{

				$scope.databse = response.records;
			});

	});