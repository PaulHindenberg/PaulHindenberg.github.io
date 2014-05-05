angular.module("app").config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/templates/main.html',
            controller:'MainCtrl'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'app/templates/about.html',
            controller:'AboutCtrl'
        })

        .state('work', {
            url: '/work',
            templateUrl: 'app/templates/work.html',
            controller:'WorkCtrl'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'app/templates/contact.html',
            controller:'ContactCtrl'
        })


        ;

});
