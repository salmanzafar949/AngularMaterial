var app = angular.module ('sqlapp',[]);
app.controller('dbctrl', function($scope, $http)
	{

		$scope.insert=function()
		{
			$http.post("dphp.php",{'name': $scope.name,'lname': $scope.lname,'dpt': $scope.dpt, 'acct': $scope.acct})
			.success(function(data, status, headers, config)
			{
				console.log("Data inserted");

			});
		}



	});