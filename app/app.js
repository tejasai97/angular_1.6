var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',['$scope',function($scope){

  $scope.removeNinja= function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  }

  $scope.ninjas = [
    {
      name:"teja",
      belt:"green",
      rate: 50,
      available:true
    },
    {
      name:"sai",
      belt:"black",
      rate: 30,
      available:true
    },
    {
      name:"kumar",
      belt:"yellow",
      rate: 10,
      available:true
    },
    {
      name:"sravan",
      belt:"red",
      rate: 150,
      available:true
    },
    {
      name:"rohan",
      belt:"orange",
      rate: 1500,
      available:true
    },
  ];
}]);
