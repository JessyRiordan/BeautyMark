/* global angular Firebase */
(function() {
    'use strict';
    angular.module('beautyMark')
      .controller('LoginController', function(FIREBASE_URL) {
          var newUser = true;
          var ref = new Firebase(FIREBASE_URL);
          var authData = ref.getAuth();
          if (authData) {
            console.log ('Authenticated user with uid:', authData.uid);
          };
          ref.authWithOAuthPopup('facebook', function(error, authData) {
            if (error) {
              console.log('Login Failed!', error);
            } else {
              console.log('Authenticated successfully with payload:', authData);
            }
          }, {
            remember: 'sessionOnly'
          });
          // ref.onAuth(function(authData) {
          //   if (authData && newUser) {
          //     ref.child('users').child(authData.uid).set({
          //       provider: authData.provider,
          //       name: authData.facebook.displayName
          //     });
          //   }
          // });
      });
})();
