/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('EyesController', function($firebaseArray, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var user = ref.getAuth();
      var eyesRef = new Firebase(FIREBASE_URL + user.uid + '/eyes');
        this.data = $firebaseArray(eyesRef);
        console.log(this.data);
        console.log();
      });

})();
