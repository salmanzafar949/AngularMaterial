var application = angular.module('routingapp',['ngRoute']);
application.config(function($routeProvider)
{

	$routeProvider
	             .when('/',
	             {
	             	templateUrl: 'home.html'
	             })
	             .when('/hello',
	             {
	             	templateUrl: 'bye.html'
	             })
	             .otherwise(
	             {
	             	redirectTo: '/'
	             });


}




	);