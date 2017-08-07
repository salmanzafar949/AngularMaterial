var app = angular.module('myapp',[]);
app.controller('mc',function($scope)
	{
		var range = 0;
		var myRange = [];
		for(i=1000; i>range; i--)
		{
			myRange.push(i);
		}
		$scope.myRange = myRange;
	});