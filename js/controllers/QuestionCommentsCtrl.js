(function (angular) {
    'use strict';

    angular.module('stackoverflow').controller('QuestionCommentsCtrl', ['$scope', '$stateParams', 'Question',
        function ($scope, $stateParams, Question) {
            Question.getById($stateParams.questionId,
                function (question) {
                    $scope.question = question;
                },
                function (response) {
                    alert(response);
                }
            );

            $scope.questionComment = {};

            $scope.addCommentToQuestion = function () {
                var question = $scope.question;
                var comment = $scope.questionComment;
                question.addCommentToQuestion(comment);

                $scope.questionComment = {};
            }
        }
    ]);
})(angular);
