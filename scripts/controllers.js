'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('QuestionListCtrl', ['$scope', 'Question',
    function ($scope, Question) {
        Question.all(function (questions) {
            $scope.questions = questions;
        });
    }
]);

appControllers.controller('QuestionDetailCtrl', ['$scope', '$routeParams', 'Question',
    function ($scope, $routeParams, Question) {
        Question.getById(
            $routeParams.questionId,
            function (question) {
                $scope.question = question;
            },
            function (response) {
                alert(response);
            }
        );
    }
]);

appControllers.controller('QuestionCreateCtrl', ['$scope', 'Question',
    function ($scope, Question) {
        $scope.question = new Question();
        angular.extend($scope.question, {
            title: '',
            content: '',
            tags: []
        });

        $scope.save = function () {
            $scope.question.$save(
                function (response) {
                    alert('success');
                },
                function (response) {
                    alert('fail');
                });
        }
    }
]);