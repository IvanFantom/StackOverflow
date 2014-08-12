(function () {
    'use strict';

    var appControllers = angular.module('appControllers', []);

    appControllers.controller('QuestionListCtrl', ['$scope', 'Question',
        function ($scope, Question) {
            Question.all(function (questions) {
                $scope.questions = questions;
            });
        }
    ]);

    appControllers.controller('QuestionViewCtrl', ['$scope', '$routeParams', 'Question',
        function ($scope, $routeParams, Question) {
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
                var comment = $scope.comment;
                comment.date = new Date();

                question.comments.push(comment);
                question.$update();
                $scope.comment = {};
            }

            $scope.addAnswer = function () {
                var question = $scope.question;
                var answer = $scope.answer;
                answer.date = new Date();

                question.answers.push(answer);
                question.$update();
                $scope.answer = {};
            }
        }
    ]);

    appControllers.controller('QuestionCreateCtrl', ['$scope', '$location', 'Question',
        function ($scope, $location, Question) {
            $scope.question = new Question();

            $scope.save = function () {
                $scope.question.$save(
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
