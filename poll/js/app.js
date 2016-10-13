var app = angular.module('pollApp', []);

app.controller('pollCtrl', ['$scope', function($scope) {

    $scope.maleCount = 0;
    $scope.femaleCount = 0;

}]);