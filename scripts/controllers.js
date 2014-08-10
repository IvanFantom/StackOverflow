'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('QuestionListCtrl', function ($scope, Question) {
    $scope.questions = Question.query();
});

appControllers.controller('QuestionCreateCtrl', function ($scope, $location, Question) {
    $scope.question = {
        title: '',
        content: '',
        tags: []
    };

    $scope.save = function () {
        Question.save($scope.question);
        $location.path('/questions');
    }
});

appControllers.controller('QuestionDetailCtrl', function ($scope, $routeParams, Question) {
    $scope.question = Question.get({ id: $routeParams.id });
});