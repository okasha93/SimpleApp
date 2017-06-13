var app = angular.module('myApp', []);

app.controller('list_companiesController', function($scope, $http) {
  // email = $scope.email;
  // psw = $scope.psw;
  $http({
    method: "GET",
    url: "http://localhost:3000/companies",
    params: {}

  }).then(function mySuccess(response) {
      // a string, or an object, carrying the response from the server.
      $scope.myRes = response.data;
      $scope.statuscode = response.status;

    }, function myError(response) {
      $scope.myRes = response.statusText;
  });
});