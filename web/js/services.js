/*
* @Author: Administrator
* @Date:   2018-04-25 15:26:54
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-25 15:35:05
*/
'use strict';

var services = angular.module('services', ['ngResource']);

// services.factory('BlogPost', ['$resource', '$routeParams',
//     function($resource, $routeParams) {
//         return $resource("./blog/blogPost", {}, {
//             get: {
//                 method: 'GET',
//                 cache: false,
//                 isArray: false
//             },
//             save: {
//                 method: 'POST',
//                 cache: false,
//                 isArray: false
//             },
//             update: {
//                 method: 'PUT',
//                 cache: false,
//                 isArray: false
//             },
//             del: {
//                 method: 'DELETE',
//                 cache: false,
//                 isArray: false
//             }
//         });
//     }
// ]);