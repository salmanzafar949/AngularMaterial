var app = angular.module ('myapp', []);
app.provider('date', function()
	{
		var greet;
		return {

            setGreeting:  function(value)
            {
            	greet = value;
            },
			$get : function()
			{
				return {
					showDate: function()
					{
						var date = new Date();
						return greet + " It's " +date.getHours();
					},
					devshowDate: function()
					{
						var date = new Date();
						return date.getHours();
					}
				}
			} 
		}
	});
app.config(function(dateProvider)
	{
		var time = dateProvider.$get().devshowDate();
	if (time > 0 && time < 13 ) 
	{
		dateProvider.setGreeting("Good Morning");
	}
	else if (time > 13 && time < 17) 
	{
		dateProvider.setGreeting("Good Noon");
	}
	else if (time > 17 && time < 19) 
	{
		dateProvider.setGreeting("Good Evening");
	}
	else
	{
		dateProvider.setGreeting("Good Night");
	}
	});
app.controller('mc', function($scope, date )
	{
		$scope.message = date.showDate();
	});