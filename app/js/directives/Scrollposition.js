/**
 * Created by paulhindenberg on 03.05.14.
 * thx2 Brandon Tilley ~ http://stackoverflow.com/users/62082/brandon-tilley
 */
angular.module('app')
    .directive('scrollPosition', function($window) {
    return {
        scope: {
            scroll: '=scrollPosition'
        },
        link: function(scope, element, attrs) {
            var windowEl = angular.element($window);
            var handler = function() {
                scope.scroll = windowEl.scrollTop();
            }
            windowEl.on('scroll', scope.$apply.bind(scope, handler));
            handler();
        }
    };
});