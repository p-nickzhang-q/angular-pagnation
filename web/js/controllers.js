/*
 * @Author: Administrator
 * @Date:   2018-04-25 15:26:22
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-04-27 17:37:37
 */
'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('mainCtrl', ['$scope', function($scope) {
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 0,
        pageItems: 3,
        changePage: function() {
            $scope.queryList(); //翻页时候执行的方法
        }
    };

    $scope.queryList = function() {
    	//queryList方法获得数据
    	$scope.paginationConf.totalItems = 10;
    };
    $scope.paginationConf.changePage();
}]);