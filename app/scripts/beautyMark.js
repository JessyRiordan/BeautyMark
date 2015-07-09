/* global angular */

(function(){
  'use strict';

  angular.module('beautyMark', ['ngRoute'])

    .config(function($routeProvider){

      // routeProvider homepage
      $routeProvider.when('/homepage', {
        templateUrl: 'views/homepage.html'
      });
      // END $routeProvider homepage

      // NAILS routes
      // routeProvider nails
      $routeProvider.when('/nails', {
        templateUrl: 'views/nails/category.html'
      });
      // END $routeProvider nails

      // routeProvider nails/add
      $routeProvider.when('/nails/add', {
        templateUrl: 'views/nails/add.html'
      });
      // END $routeProvider nails/add

      // routeProvider nails/item
      $routeProvider.when('/nails/item', {
        templateUrl: 'views/nails/item.html'
      });
      // END $routeProvider nails/item
      // END NAILS routes

      // routeProvider eyes
      $routeProvider.when('/eyes', {
        templateUrl: 'views/eyes/category.html'
      });
      // END $routeProvider eyes

      // routeProvider face
      $routeProvider.when('/face', {
        templateUrl: 'views/face/category.html'
      });
      // END $routeProvider face

      // routeProvider lips
      $routeProvider.when('/lips', {
        templateUrl: 'views/lips/category.html'
      });
      // END $routeProvider lips

      // routeProvider hair
      $routeProvider.when('/hair', {
        templateUrl: 'views/hair/category.html'
      });
      // END $routeProvider hair

      // routeProvider tools
      $routeProvider.when('/tools', {
        templateUrl: 'views/tools/category.html'
      });
      // END $routeProvider tools
    });

})();
