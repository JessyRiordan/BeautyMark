/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddHairController', function(FIREBASE_URL, $firebaseArray, $location) {
      var ref = new Firebase(FIREBASE_URL);
      var authData = ref.getAuth();
      var hairRef = ref.child(authData.uid + '/hair');
      var hairProduct = {
        'type': '',
        'product': '',
        'brand': '',
        'rating': ''
      };
      this.hairProduct = $firebaseArray(hairRef);
      console.log(hairProduct);
      this.submitHair = function() {
        this.hairProduct.$add({
          type: this.type,
          product: this.product,
          brand: this.brand,
          rating: this.rating
        }).then(function(){
          $location.path('/hair');
        });
      };
      // this.redirect = function() {
      //   return $location.path('/nails');
      // };
  });
})();
