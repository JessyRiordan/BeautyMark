/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddNailsController', function($scope, $firebaseArray, FIREBASE_URL) {
      // $scope.items = NailItem.all;
      // var self = this;
      // this.numberOf = 0;
      // $scope.item  = {
      //   'Brand': '',
      //   'Name': '',
      //   'Family': '',
      //   'Tone': '',
      //   'Finish': '',
      //   'Rating': ''
      // };
      //
      // $scope.submitItem = function() {
      //   NailItem.create($scope.item).then(function(ref) {
      //     $location.path('/nails/' + ref.name());
      //   });
      // };
      var items = new Firebase(FIREBASE_URL + 'nails');
      $scope.item = {
        'Brand': '',
        'Name': '',
        'Family': '',
        'Tone': '',
        'Finish': '',
        'Rating': ''
      }
      console.log($scope.item);
      $scope.nails = $firebaseArray(items);
      console.log($scope.nails);
      $scope.submitNail = function() {
        $scope.nails.$add($scope.item);

      };
      // var user = ref.getAuth();
      // $http.get(FIREBASE_URL + user.uid + '/nails.json')
      });
})();
