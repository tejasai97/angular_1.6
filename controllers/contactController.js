var contactController =angular.module('contactController',['ngRoute','ngAnimate']);
contactController.controller('contactController',['$scope','$location',function($scope,$location){
  $scope.sendMessage =function(){
    $location.path('contact-success');
  };
}]);
