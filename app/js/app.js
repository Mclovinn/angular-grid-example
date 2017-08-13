'use strict';

var app = angular.module('angular-grid-example', ['ngRoute', 'ui.bootstrap', 'angularGrid', 'ngLodash']);

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl : '/views/main.view.html',
            controller  : 'MainController'
        })
        .otherwise({
            templateUrl : '/views/main.view.html',
            controller  : 'MainController'
        });
});
