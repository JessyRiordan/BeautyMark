/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('NailsController', function($scope, $firebaseArray, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var user = ref.getAuth();
      var nailsRef = new Firebase(FIREBASE_URL + user.uid + '/nails');
        this.data = $firebaseArray(nailsRef);
        console.log(this.data);
        console.log();
      });

})();
