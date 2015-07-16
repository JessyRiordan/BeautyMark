/* global angular Firebase JQuery*/
(function() {
  'use strict';
  angular.module('beautyMark')
    .controller('AddNailsController', function(FIREBASE_URL, $firebaseArray) {
      var ref = new Firebase(FIREBASE_URL);
      var nailsRef = ref.child("nails");
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
      this.submitNail = function($scope, $firebaseArray) {
        this.nailProduct.$add({
          brand: this.brand,
          name: this.name,
          family: this.family,
          tone: this.tone,
          finish: this.finish,
          rating: this.rating
        });

      };
  });
})();
