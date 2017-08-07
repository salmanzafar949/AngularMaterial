var app = angular.module('myapp',[]);
app.controller('mc',function($scope)
	{
		$scope.randomnumber = Math.random();
		document.querySelector('input').addEventListener('click', function()
		{
			console.log('button Clicked');
			$scope.randomnumber=Math.random();
			$scope.$digest();

		}, false )
	});