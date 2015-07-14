/* global angular Firebase */
(function(){
  'use strict';
  angular.module('beautyMark')
  .controller('LoginController', function() {
    var ref = new Firebase("https://beautymark.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }},
      {
        remember: "sessionOnly"
    });
  });
})();
