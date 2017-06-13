var myNinjaApp = angular.module('myNinjaApp',['ngRoute','ngAnimate','NinjaController','contactController']);

myNinjaApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/home',{
      templateUrl:'views/home.html',
      controller:'NinjaController'
    })
    .when('/contact',{
      templateUrl:'views/contact.html',
      controller:'contactController'
    })
    .when('/contact-success',{
      templateUrl:'views/contact-success.html',
      controller:'contactController'
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
