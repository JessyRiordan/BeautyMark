/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddNailsController', function($scope, $firebaseArray, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      $scope.nails = $firebaseArray(ref);
      $scope.submitNail = function() {
        $scope.nails.$add({
          Brand: $scope.newNailsBrand,
          Name: $scope.newNailsName,
          Family: $scope.newNailsCFamily,
          Tone: $scope.newNailsCTone,
          Finish: $scope.newNailsCFinish,
          Rating: $scope.newNailsRating
        });
      }
      // var user = ref.getAuth();
      // $http.get(FIREBASE_URL + user.uid + '/nails.json')
      });
})();
