app.controller('mainCtrl',function($scope,$state){
  $scope.goToBall = function() {
    $state.go('ball')
  }
  $scope.goToBird = function() {
    $state.go('bird')
  }
})