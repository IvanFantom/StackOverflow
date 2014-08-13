(function () {
    'use strict';

    angular.module('stackoverflow').controller('QuestionViewCtrl', ['$scope', 'uuid', '$stateParams', 'Question',
        function ($scope, uuid, $stateParams, Question) {
            Question.getById($stateParams.questionId,
                function (question) {
                    $scope.question = question;
                },
                function (response) {
                    alert(response);
                }
            );

            $scope.questionComment = {};
            $scope.answerComment = {};

            $scope.addCommentToQuestion = function () {
                var question = $scope.question;
                var comment = $scope.questionComment;
                question.addCommentToQuestion(comment);

                $scope.questionComment = {};
            }

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
})();
