angular.module("app", ['ui.router']).run(function($rootScope) {
    // adds some basic utilities to the $rootScope for debugging purposes
    // $rootScope.$state = $state;
    $rootScope.log = function(thing) {
        console.log(thing);
    };

    $rootScope.alert = function(thing) {
        alert(thing);
    };
});
