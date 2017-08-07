var app = angular.module('todpoapp',[]);
app.controller('mc', function($scope)
	{
		$scope.statusChanged = function(x){
    console.log('status changed : ' + x );
    $scope.tasks[x].taskStatus != $scope.tasks[x].taskStatus;
    localStorage['taskslist'] = JSON.stringify($scope.tasks);
 }

		$scope.tasks = [];
		var taskdata = localStorage['tasklist'];
		if (taskdata !== undefined) 
		{
			$scope.tasks = JSON.parse(taskdata);
		}
		$scope.searchEnter = function()
		{
			//console.log(event.which || event.keycode);
			if (event.which == 13 && $scope.task != "") 
			{
				$scope.addtask();
			}

		};

		$scope.addtask = function()
		{
			$scope.tasks.push({'taskmessage': $scope.task, 'status': false });
			console.log($scope.tasks);
			$scope.task = "";
			localStorage['tasklist'] = JSON.stringify($scope.tasks);
			console.log(localStorage);
		};
		$scope.contentEdit = function(x)
			{
                console.log('something');
                for (i=0; i < $scope.tasks,length; i++) 
                {
                	if ($scope.tasks[i].taskmessage == x) 
                	{
                		$scope.tasks[i].taskmessage = event.target.innertext;
                	}

                }	
                localStorage['tasklist'] = JSON.stringify($scope.tasks);
                console.log($scope.tasks);
                event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";

			};
			$scope.enterAgain = function(msg)
			{

				if (event.which == 13 && msg != "") 
			{
				$scope.contentEdit();
			}


			}

	});