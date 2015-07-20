/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddLipsController', function(FIREBASE_URL, $firebaseArray, $location) {
      var ref = new Firebase(FIREBASE_URL);
      var authData = ref.getAuth();
      var lipsRef = ref.child(authData.uid + '/lips');
      var lipsProduct = {
        'type': '',
        'brand': '',
        'color': '',
        'family': '',
        'tone': '',
        'rating': ''
      };
      this.lipsProduct = $firebaseArray(lipsRef);
      console.log(lipsProduct);
      this.submitLips = function() {
        this.lipsProduct.$add({
          type: this.type,
          brand: this.brand,
          color: this.color,
          family: this.family,
          tone: this.tone,
          rating: this.rating
        }).then(function(){
          $location.path('/lips');
        });
      };
      // this.redirect = function() {
      //   return $location.path('/nails');
      // };
  });
})();
