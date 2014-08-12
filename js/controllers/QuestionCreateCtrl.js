(function () {
    'use strict';

    angular.module('stackoverflow').controller('QuestionCreateCtrl', ['$scope', '$location', 'Question',
        function ($scope, $location, Question) {
            $scope.question = new Question();

            $scope.save = function () {
                var question = $scope.question;
                question.date = new Date();
                var tags = question.tags.split(' ');
                question.tags = tags;

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
})();
