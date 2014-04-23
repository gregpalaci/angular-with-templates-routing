var App = angular.module('App', ['ngRoute', 'ngSanitize']);

App.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});

App.controller('mainController', function($scope) {
    $scope.message = 'Hello World from Angular';
});

App.controller('aboutController', function($scope) {
    $scope.message = "I'm an about page"
});

App.controller('contactController', function($scope) {
    $scope.message = "contact us!"
});