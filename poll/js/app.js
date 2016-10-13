var app = angular.module('pollApp', []);

app.controller('pollCtrl', ['$scope', function($scope) {

    $scope.maleCount = 0;
    $scope.femaleCount = 0;

    $scope.incrementMale = function() {
        $scope.maleCount += 1;
    };

    $scope.incrementFemale = function() {
        $scope.femaleCount++;
    };


}]);