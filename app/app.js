var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',['$scope',function($scope){

  $scope.ninjas = [
    {
      name:"teja",
      belt:"green",
      rate: 50
    },
    {
      name:"sai",
      belt:"black",
      rate: 30
    },
    {
      name:"kumar",
      belt:"yellow",
      rate: 10
    },
    {
      name:"sravan",
      belt:"red",
      rate: 150
    }
  ];
}]);
