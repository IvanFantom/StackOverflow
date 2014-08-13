(function () {
    'use strict';

    var app = angular.module('stackoverflow', ['ngRoute', 'mongolabResourceHttp', 'ngTagsInput']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/questions', {
                    templateUrl: 'views/question-list.html',
                    controller: 'QuestionListCtrl'
                }).
                when('/questions/:questionId', {
                    templateUrl: 'views/question-view.html',
                    controller: 'QuestionViewCtrl'
                }).
                when('/create', {
                    templateUrl: 'views/question-create.html',
                    controller: 'QuestionCreateCtrl'
                }).
                otherwise({
                    redirectTo: '/questions'
                });
        }
    ]);
})();