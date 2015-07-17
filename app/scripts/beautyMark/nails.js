/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('NailsController', function($scope, $firebaseObject, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var user = ref.getAuth();
      var nail = new Firebase(FIREBASE_URL + user.uid + '/nails');
        $scope.data = $firebaseObject(nail);
        console.log($scope.data);
      });

})();
