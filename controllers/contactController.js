var contactController =angular.module('contactController',[]);
contactController.controller('contactController',['$scope','$location',function($scope,$location){
  $scope.sendMessage =function(){
    $location.path('contact-success');
  };
}]);
