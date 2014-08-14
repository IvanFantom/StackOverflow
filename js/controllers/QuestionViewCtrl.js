(function (angular) {
    'use strict';

    angular.module('stackoverflow').controller('QuestionViewCtrl', ['$scope', '$stateParams', 'Question',
        function ($scope, $stateParams, Question) {
            Question.getById($stateParams.questionId,
                function (question) {
                    $scope.question = question;
                },
                function (response) {
                    alert(response);
                }
            );

            $scope.answerComment = {};

            $scope.addCommentToAnswer = function (answerId) {
                var question = $scope.question;
                var comment = $scope.answerComment;
                question.addCommentToAnswer(comment, answerId);

                $scope.answerComment = {};
            }

            $scope.addAnswer = function () {
                var question = $scope.question;
                var answer = $scope.answer;
                question.addAnswer(answer);

                $scope.answer = {};
            }
        }
    ]);
})(angular);
