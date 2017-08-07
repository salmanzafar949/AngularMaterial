var app = angular.module ('myapp', []);
app.provider('date', function()
	{
		return {

			$get : function()
			{
				return {
					showDate: function()
					{
						var date = new Date();
						return date.getHours();
					}
				}
			} 
		}
	});
app.controller('mc', function($scope, date )
	{
		$scope.message = date.showDate();
	});