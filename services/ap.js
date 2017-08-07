var app = angular.module('myapp',[]);
app.service('random',function()
{
	var num = Math.floor(Math.random()*10);
	this.generate = function(){

                return num;
	};


});

app.controller('mc', function($scope, random)
{
	$scope.generateRandom = function()
	{
		$scope.randomNumber = random.generate();
		$scope.randomNumber2 = random.generate();
	};

});

// ----->>>>> Ran the service
// ----->>>>>  Passed the Refre