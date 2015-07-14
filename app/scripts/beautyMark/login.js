/* global angular Firebase */
(function() {
    'use strict';
    angular.module('beautyMark')
      .controller('LoginController', function() {
          var newUser = true;
          var ref = new Firebase("https://beautymark.firebaseio.com");
          ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
            } else {
              console.log("Authenticated successfully with payload:", authData);
            }
          }, {
            remember: "sessionOnly"
          })
          ref.onAuth(function(authData) {
            if (authData && newUser) {
              ref.child("users").child(authData.uid).set({
                provider: authData.provider,
                name: getName(authData)
              });
            }
          });
          function getName(authData) {
              return authData.facebook.displayName;
          };
      });
})();
