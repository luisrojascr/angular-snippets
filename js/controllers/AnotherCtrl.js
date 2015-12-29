angular.module('snippetsApp').controller('AnotherCtrl', function ($scope, UserService) {
  $scope.firstUser = UserService.first();
});