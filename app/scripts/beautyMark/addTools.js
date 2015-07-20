/* global angular Firebase */
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddToolsController', function(FIREBASE_URL, $firebaseArray, $location) {
      var ref = new Firebase(FIREBASE_URL);
      var authData = ref.getAuth();
      var toolsRef = ref.child(authData.uid + '/tools');
      var toolsProduct = {
        'type': '',
        'product': '',
        'brand': '',
        'rating': ''
      };
      this.toolsProduct = $firebaseArray(toolsRef);
      console.log(toolsProduct);
      this.submitTools = function() {
        this.toolsProduct.$add({
          type: this.type,
          product: this.product,
          brand: this.brand,
          rating: this.rating
        }).then(function(){
          $location.path('/tools');
        });
      };
      // this.redirect = function() {
      //   return $location.path('/nails');
      // };
  });
})();
