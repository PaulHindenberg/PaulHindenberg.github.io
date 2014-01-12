angular.module("app").config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            abstract:false,
            url: '/',
            templateUrl: 'app/templates/main.html',
            controller:'MainCtrl'
        })
        ;

});
