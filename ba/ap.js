var app = angular.module('myapp', []);
app.controller('mc', function($scope)
{
	$scope.mynumber = Math.random();
	document.querySelector('input').addEventListener('click', function()
	{

		console.log('button clicked');
		$scope.mynumber = Math.random();
		$scope.$digest();

	}, false);

});