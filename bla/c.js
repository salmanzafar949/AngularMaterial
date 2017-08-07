var app = angular.module('routing',['ngRoute']);

app.config(function($routeProvider)

{

	$routeProvider
	             .when('/',
	             {

	             	template: 'jhg'

	             })

	             .when('/ap',
	             {

	             	templateUrl: '2.html'
	             })

	             .otherwise(
	             	{

	             		redirectTo: '/'
	             	});


}


	);