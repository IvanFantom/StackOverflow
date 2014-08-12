(function () {
    'use strict';

    angular.module('stackoverflow').controller('QuestionViewCtrl', ['$scope', 'uuid', '$routeParams', 'Question',
        function ($scope, uuid, $routeParams, Question) {
            $scope.questionComment = {};
            $scope.answerComment = {};
            Question.getById($routeParams.questionId,
                function (question) {
                    $scope.question = question;
                },
                function (response) {
                    alert(response);
                }
            );

            $scope.addCommentToQuestion = function () {
                var question = $scope.question;
                var comment = $scope.questionComment;
                comment.date = new Date();

                question.comments = question.comments || [];
                question.comments.push(comment);
                question.$update();
                $scope.questionComment = {};
            }

            $scope.addCommentToAnswer = function (answerId) {
                var question = $scope.question;
                var comment = $scope.answerComment;
                comment.date = new Date();

                for (var i = 0; i < question.answers.length; i++) {
                    if (question.answers[i].id === answerId) {
                        question.answers[i].comments = question.answers[i].comments || [];
                        question.answers[i].comments.push(comment);
                        break;
                    }
                }
                question.$update();
                $scope.answerComment = {};
            }

            $scope.addAnswer = function () {
                var question = $scope.question;
                var answer = $scope.answer;
                answer.id = uuid.newguid();
                answer.date = new Date();

                question.answers = question.answers || [];
                question.answers.push(answer);
                question.$update();
                $scope.answer = {};
            }
        }
    ]);
})();
