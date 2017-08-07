 var app = angular.module('myApp',[]);
    app.controller('bookController',function($scope,$http){	
    $scope.insertData=function(){		
    $http.post("insert.php", {
		'bname':$scope.bname,
		'bauthor':$scope.bauthor,
		'bprice':$scope.bprice,
		'blanguage':$scope.blanguage})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");
    });
        }
         });