/*
* @Author: Administrator
* @Date:   2018-04-25 15:25:55
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-27 17:21:03
*/
'use strict';

var app = angular.module('app', [ 'ngRoute', 'controllers', 'services', 'directives' ]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl : 'partials/main.html',
		controller : 'mainCtrl'
	});
	$locationProvider.html5Mode(false).hashPrefix('!');
}]);