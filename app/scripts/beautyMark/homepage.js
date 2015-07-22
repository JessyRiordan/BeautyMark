/* global angular Firebase */
(function() {
    'use strict';
    angular.module('beautyMark')
      .controller('LogoutController', function(FIREBASE_URL) {
          var ref = new Firebase(FIREBASE_URL);
          this.logout = function() {
            ref.unauth();
          };
      });
})();
