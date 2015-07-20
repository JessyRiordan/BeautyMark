/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('HairController', function($firebaseArray, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var user = ref.getAuth();
      var hairRef = new Firebase(FIREBASE_URL + user.uid + '/hair');
        this.data = $firebaseArray(hairRef);
        console.log(this.data);
        console.log();
      });

})();
