/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddNailsController', function(FIREBASE_URL, $firebaseArray, $location) {
      var ref = new Firebase(FIREBASE_URL);
      var authData = ref.getAuth();
      var nailsRef = ref.child(authData.uid + '/nails');
      var nailProduct = {
        'brand': '',
        'name': '',
        'family': '',
        'tone': '',
        'finish': '',
        'rating': ''
      };
      this.nailProduct = $firebaseArray(nailsRef);
      console.log(nailProduct);
      this.submitNail = function() {
        this.nailProduct.$add({
          brand: this.brand,
          name: this.name,
          family: this.family,
          tone: this.tone,
          finish: this.finish,
          rating: this.rating
        }).then(function(){
          $location.path('/nails');
        });
      };
      // this.redirect = function() {
      //   return $location.path('/nails');
      // };
  });
})();
