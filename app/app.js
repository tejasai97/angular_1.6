var myNinjaApp = angular.module('myNinjaApp',['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl:'views/home.html'
    })
    .when('/directory',{
      templateUrl:'views/directory.html',
      controller:'NinjaController'
    }).otherwise({
      redirectTo:'/home'
    });
}]);

myNinjaApp.controller('NinjaController',['$scope',function($scope){

  $scope.removeNinja= function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  };

  $scope.addNinja= function(){
    $scope.ninjas.push({
      name:$scope.newninja.name,
      belt:$scope.newninja.belt,
      rate:parseInt($scope.newninja.rate),
      available:true
    });

    $scope.newninja.name = "";
    $scope.newninja.belt = "";
    $scope.newninja.rate = "";
  };

  $scope.ninjas = [
    {
      name:"teja",
      belt:"green",
      rate: 50,
      available:true,
      thumb:"content/img/deadpool.png"
    },
    {
      name:"sai",
      belt:"black",
      rate: 30,
      available:true,
      thumb:"content/img/batman.png"
    },
    {
      name:"kumar",
      belt:"yellow",
      rate: 10,
      available:true,
      thumb:"content/img/flash.png"
    },
    {
      name:"sravan",
      belt:"red",
      rate: 150,
      available:true,
      thumb:"content/img/spiderman.png"
    },
    {
      name:"rohan",
      belt:"orange",
      rate: 1500,
      available:true,
      thumb:"content/img/superman.png"
    },
  ];
}]);
