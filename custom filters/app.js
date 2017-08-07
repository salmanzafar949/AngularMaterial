var app = angular.module('myapp',[]);
app.filter('base', function()
	{
		var something =  function(input, base)
		{
			var parsed = parseInt(input, 10);
			var based = parseInt(base, 10);

			if (isNan (parsed) || isNan (based) || based <= 1 || based>= 37) return 'Invalid Base';
			return parsed.toString(based);
			$scope.$digest();

		}

		return something;
	});
app.controller('mc', function( $scope){

});