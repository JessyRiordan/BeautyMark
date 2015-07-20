/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddFaceController', function(FIREBASE_URL, $firebaseArray, $location) {
      var ref = new Firebase(FIREBASE_URL);
      var authData = ref.getAuth();
      var faceRef = ref.child(authData.uid + '/face');
      var faceProduct = {
        'type': '',
        'product': '',
        'brand': '',
        'color': '',
        'rating': ''
      };
      this.faceProduct = $firebaseArray(faceRef);
      console.log(faceProduct);
      this.submitFace = function() {
        this.faceProduct.$add({
          type: this.type,
          product: this.product,
          brand: this.brand,
          color: this.color,
          rating: this.rating
        }).then(function(){
          $location.path('/face');
        });
      };
      // this.redirect = function() {
      //   return $location.path('/nails');
      // };
  });
})();
