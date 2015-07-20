/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('FaceController', function($firebaseArray, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var user = ref.getAuth();
      var faceRef = new Firebase(FIREBASE_URL + user.uid + '/face');
        this.data = $firebaseArray(faceRef);
        console.log(this.data);
        console.log();
      });

})();
