var app =angular.module('myapp',[]);
app.controller('mc',function($scope)
	{
		$scope.counter= -1;
		$scope.$watch ('mytext', function(newValue, oldValue)
			{
				$scope.counter++;
				console.log("NEw Value:" +newValue);
				console.log("Old Value:" +oldValue);
				if ($scope.counter == 100) 
				{

					alert('Limit Excedeed');

				}
			});

	});