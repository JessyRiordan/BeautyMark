/* global */
// (function() {
//     'use strict';
//     angular.module('beautyMark')
//       .factory('NailItem', function($firebase, $firebaseArray, FIREBASE_URL) {
//           var ref = new Firebase(FIREBASE_URL);
//           var items = $firebaseArray(ref.child('nails'));
//
//           var NailItem = {
//             all: items,
//             create: function(item) {
//               return items.$add(item);
//             }
//             // get: function(questionId) {
//             //   return $firebase(ref.child('questions').child(questionId)).$asObject();
//             // },
//             // delete: function(question) {
//             //   return questions.$remove(question);
//             // },
//             // createAnswer: function (question, answer) {
//             //   return $firebase(ref.child('questions/' + question + '/answers')).$asArray().$add(answer);
//             // }
//           };
//
//           return NailItem;
//         });
//       })();
