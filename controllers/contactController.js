var contactController =angular.module('contactController',['ngRoute','ngAnimate']);
myNinjaApp.controller('contactController',['$scope','$location',function($scope,$location){
  $scope.sendMessage =function(){
    $location.path('contact-success');
  };
}]);
