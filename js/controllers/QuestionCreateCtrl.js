(function (angular) {
    'use strict';

    angular.module('stackoverflow').controller('QuestionCreateCtrl', ['$scope', '$location', 'Question',
        function ($scope, $location, Question) {
            $scope.question = new Question();

            $scope.save = function () {
                var question = $scope.question;
                question.date = new Date();

                question.$save(
                    function (response) {
                        $location.path('/questions');
                    },
                    function (response) {
                        alert('fail');
                    });
            }
        }
    ]);
})(angular);
