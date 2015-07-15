/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddNailsController', function($http, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var user = ref.getAuth();
      $http.get(FIREBASE_URL + user.uid + '/nails.json')
      });
})();
