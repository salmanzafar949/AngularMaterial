angular.module('myapp', ['uiGmapgoogle-maps'])
    .controller('mc', function($scope) {
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });