/* global angular */

(function(){
  'use strict';

  angular.module('beautyMark', ['ngRoute', 'restangular', 'firebase'])

    .config(function($routeProvider){

      // routeProvider login
      $routeProvider.when('/login', {
        templateUrl: 'views/login.html'
      });
      // END routeProvider login

      // routeProvider homepage
      $routeProvider.when('/homepage', {
        templateUrl: 'views/homepage.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });
      // END $routeProvider homepage

      // routeProvider about
      $routeProvider.when('/about', {
        templateUrl: 'views/about.html'
      });
      // END $routeProvider about

      // 404 Page
      // routeProvider 404
      $routeProvider.when('/404', {
        templateUrl: 'views/404.html'
      });
      // END $routeProvider 404

      // route provider otherwise
      $routeProvider.otherwise('/404');
      // END $routeProvider otherwise
      // END 404 Page

      // NAILS routes
      // routeProvider nails
      $routeProvider.when('/nails', {
        templateUrl: 'views/nails/category.html',
        controller: 'NailsController',
        controllerAs: 'nails'
      });
      // END $routeProvider nails

      // routeProvider nails/add
      $routeProvider.when('/nails/add', {
        templateUrl: 'views/nails/add.html',
        controller: 'AddNailsController',
        controllerAs: 'addNail'
      });
      // END $routeProvider nails/add

      // routeProvider nails/item
      $routeProvider.when('/nails/item', {
        templateUrl: 'views/nails/item.html'
      });
      // END $routeProvider nails/item
      // END NAILS routes

      // EYES routes
      // routeProvider eyes
      $routeProvider.when('/eyes', {
        templateUrl: 'views/eyes/category.html',
        controller: 'EyesController',
        controllerAs: 'eyes'
      });
      // END $routeProvider eyes

      // routeProvider eyes/add
      $routeProvider.when('/eyes/add', {
        templateUrl: 'views/eyes/add.html',
        controller: 'AddEyesController',
        controllerAs: 'addEye'
      });
      // END $routeProvider eyes/add
      // END EYES routes

      // FACE routes
      // routeProvider face
      $routeProvider.when('/face', {
        templateUrl: 'views/face/category.html',
        controller: 'FaceController',
        controllerAs: 'face'
      });
      // END $routeProvider face

      // routeProvider face/add
      $routeProvider.when('/face/add', {
        templateUrl: 'views/face/add.html',
        controller: 'AddFaceController',
        controllerAs: 'addFace'
      });
      // END $routeProvider face/add
      // END FACE routes

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

      // routeProvider default
      $routeProvider.when('/', {
        redirectTo: '/login'
      });
      // END routeProvider default
    })
    .constant('FIREBASE_URL', 'https://beautymark.firebaseio.com/users/');
})();
