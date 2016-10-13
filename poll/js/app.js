var app = angular.module('pollApp', []);

app.controller('pollCtrl', ['$scope', function($scope) {

    $scope.maleCount = 0;
    $scope.femaleCount = 0;

    $scope.malePercentage = 0;
    $scope.femalePercentage = 0;

    $scope.incrementMale = function() {
        $scope.maleCount += 1;
        $scope.malePercentage = Math.floor($scope.maleCount / ($scope.femaleCount + $scope.maleCount) * 100);
        $scope.femalePercentage = Math.floor($scope.femaleCount / ($scope.femaleCount + $scope.maleCount) * 100);
    };

    $scope.incrementFemale = function() {
        $scope.femaleCount++;
        $scope.malePercentage = Math.floor($scope.maleCount / ($scope.femaleCount + $scope.maleCount) * 100);
        $scope.femalePercentage = Math.floor($scope.femaleCount / ($scope.femaleCount + $scope.maleCount) * 100);
    };


}]);