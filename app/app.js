var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',['$scope',function($scope){
  $scope.message = "hello world";
  $scope.ninjas = ['yoshi','crystal','ryu','john'];
}]);
