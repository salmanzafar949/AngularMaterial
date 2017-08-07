var app = angular.module ('myapp', []);
app.factory('random',function()
{
	var randomObject = {};
	var num = Math.floor(Math.random()*10);
	randomObject.generate = function()
	{
		return num;
	};

	return randomObject;

});

app.controller('mc', function($scope, random )
	{
		$scope.generateRandom = function()
		{
			$scope.randomNumber = random.generate();
		}
	});