angular.module('flapperNews')
.controller('HomeCtrl', [
'$scope',
function($scope){
  $scope.test = 'From AngularJs: This is home page.';
}]);
