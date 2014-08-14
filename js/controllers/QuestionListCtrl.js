(function (angular) {
    'use strict';

    angular.module('stackoverflow').controller('QuestionListCtrl', ['$scope', 'Question',
        function ($scope, Question) {
            Question.all(function (questions) {
                $scope.questions = questions;
            });
        }
    ]);
})(angular);
