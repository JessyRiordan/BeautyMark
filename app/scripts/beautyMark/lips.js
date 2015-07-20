/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('LipsController', function($firebaseArray, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var user = ref.getAuth();
      var lipsRef = new Firebase(FIREBASE_URL + user.uid + '/lips');
        this.data = $firebaseArray(lipsRef);
        console.log(this.data);
        console.log();
      });

})();
