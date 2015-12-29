angular.module('snippetsApp').controller('MyCtrl', function ($scope, UserService) {
  
  //Solution 1
  $scope.value = 1;

  $scope.incrementValue = function(value) {
    $scope.value += 1;
  };
  
  //Solution 2
  $scope.name = "Peter";
  $scope.user = {
    name: "Parker"
  };
  
  //solution 3
  $scope.users = UserService.all();
  
});