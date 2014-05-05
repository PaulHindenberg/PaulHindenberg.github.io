angular.module("app", ['ui.router','ngSanitize']).run(function($rootScope, $state) {
    // adds some basic utilities to the $rootScope for debugging purposes
    // $rootScope.$state = $state;
    $rootScope.log = function(thing) {
        console.log(thing);
    };

    $rootScope.alert = function(thing) {
        alert(thing);
    };

    $rootScope.isActive = function(viewLocation){
        return viewLocation === $state.current.name;
    };

    $rootScope.scroll = 0;

});
