'use strict';

angular.module('newProjectApp')
    .controller('NavbarCtrl', function($scope, $location) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }];

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });