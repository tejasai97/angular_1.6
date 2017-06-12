var myNinjaApp = angular.module('myNinjaApp',['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl:'views/home.html',
      controller:'NinjaController'
    })
    .when('/directory',{
      templateUrl:'views/directory.html',
      controller:'NinjaController'
    }).otherwise({
      redirectTo:'/home'
    });
}]);

myNinjaApp.directive('randomNinja',[function(){
  return {
    restrict:'E',
    scope:{
      ninjas:'=',
      title:'='
    },
    templateUrl:"views/random.html",
    transclude:true,
    replace:true,
    controller:function($scope){
      $scope.random = Math.floor(Math.random() *5);
    }
  };
}]);


myNinjaApp.controller('NinjaController',['$scope','$http',function($scope,$http){

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
/*  $http.get('data/ninjas.json').then(function(success,data){
    $scope.ninjas=data;
  }); */
  $http.get('data/ninjas.json').then(successCallback, errorCallback);

function successCallback(response){
    //success code
    //console.log(response.data);
    $scope.ninjas=response.data;
}
function errorCallback(error){
    //error code
    console.log('error occured during retreiving data');
}
}]);
