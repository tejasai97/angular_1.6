var NinjaController =angular.module('NinjaController',[]);
NinjaController.controller('NinjaController',['$scope','$http',function($scope,$http){

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

  $scope.removeAll =function(){
    $scope.ninjas=[];
  };

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
