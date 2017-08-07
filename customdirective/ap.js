var app = angular.module('myapp',[])
/*app.directive('mD', function()
	{
		return {

			template: 'Welcome',
			//restrict: 'EA' Attribute elements ojects defination

		};
	});
	*/

/*app.directive('mD',function()    // Linkproperty
{
	function linkFunction($scope,elem,attrs)
	{
		$scope.name = "salman";
		$scope.cname = function(nname)
		{
			$scope.name = nname;
		}
	}

	return {

		restrict: 'EA',
		link:  linkFunction,
		template: '<span ng-click="cname(\'Salman Zafar\')"> curenttext: {{name}} </span>'
	}

});
*/
/*app.directive('mD',function()    // 3scope properties t true fals nd object {}
{
	function linkFunction($scope,elem,attrs)
	{
		$scope.name = "salman";
		$scope.cname = function(nname)
		{
			$scope.name = $scope.controllerProperty;
		}
	}

	return {

        
		restrict: 'EA',
		scope: true,
		link:  linkFunction,
		template: '<span ng-click="cname()"> curenttext: {{name}} </span>'
	}

}); */
app.directive('mD',function()    // isolated scope has 2 properties @--> text binder = --> tow-way-bind  &----> one way bind
{

	return {

        
		restrict: 'EA',
		scope: {
			name : '@'
		},
		template: [' <p> value of name in directive: {{name}} </p> ',
		'<p> Enter new name <input type="text" ng-model="name"> </p>'].join('')

	}

});


app.controller('mc',function($scope)
{
        $scope.name = "Hira";

});