/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddEyesController', function(FIREBASE_URL, $firebaseArray, $location) {
      var ref = new Firebase(FIREBASE_URL);
      var authData = ref.getAuth();
      var eyesRef = ref.child(authData.uid + "/eyes");
      var eyeProduct = {
        'type': '',
        'product': '',
        'brand': '',
        'color': '',
        'rating': ''
      };
      this.eyeProduct = $firebaseArray(eyesRef);
      console.log(eyeProduct);
      this.submitEye = function() {
        this.eyeProduct.$add({
          type: this.type,
          product: this.product,
          brand: this.brand,
          color: this.color,
          rating: this.rating
        }).then(function(){
          $location.path('/eyes');
        });
      };
      // this.redirect = function() {
      //   return $location.path('/nails');
      // };
  });
})();
