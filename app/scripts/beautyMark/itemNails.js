/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('ItemNailsController', function(FIREBASE_URL, $routeParams) {
      var itemId = $routeParams.itemId;
      console.log(itemId);
      var ref = new Firebase(FIREBASE_URL);
      var user = ref.getAuth();
      var nailsRef = new Firebase(FIREBASE_URL + user.uid + '/nails/:itemId');
    });
})();
