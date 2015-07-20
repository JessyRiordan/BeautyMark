/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('ToolsController', function($firebaseArray, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var user = ref.getAuth();
      var toolsRef = new Firebase(FIREBASE_URL + user.uid + '/tools');
        this.data = $firebaseArray(toolsRef);
        console.log(this.data);
        console.log();
      });

})();
