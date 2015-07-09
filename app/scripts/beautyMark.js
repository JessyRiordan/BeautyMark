(function(){
  'use strict';

  angular.module('beautyMark', ['ngRoute'])

    .config(function($routeProvider){
      $routeProvider.when('/homepage', {
        templateUrl: 'views/homepage.html'
      }); // END $routeProvider homepage
    });

})();
