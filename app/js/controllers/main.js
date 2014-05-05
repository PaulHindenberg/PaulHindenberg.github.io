angular.module('app')
    .controller('AboutCtrl', function ($scope, $log, ContentService) {
        $scope.workExp = ContentService.getEmployments();
        $scope.languages = ContentService.getLanguages();
        $scope.skills = ContentService.getSkills();
        $scope.certs = ContentService.getCertificates();

        $scope.download = function(e){
            //0-deutscher LL || 1 - CV || 2 - projects
            switch (e){
                case 0:
                    window.open('content/PaulHindenberg_lebenslauf_042014.pdf','_blank');
                    break;
                case 1:
                    alert('TODO');
                    break;
                case 2:
                    alert('TODO');
                    break;
            }
        }
    })
    .controller('WorkCtrl', function ($scope, $log, ContentService) {
        $scope.projects = ContentService.getProjects();
        $scope.courses = ContentService.getCourses();
    })
    .controller('ContactCtrl', function ($scope, $log) {})

    .controller('MainCtrl', function ($scope, $state, $log, ContentService) {
        $scope.openUrl = function(url){
            window.open(url,'_blank');
        }

        $scope.me = ContentService.getMe();
    });