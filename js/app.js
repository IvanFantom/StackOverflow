(function () {
    'use strict';

    var app = angular.module('stackoverflow', ['ui.router', 'mongolabResourceHttp', 'ngTagsInput']);

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/questions');

            $stateProvider
                .state('questions', {
                    url: '/questions',
                    templateUrl: 'views/question-list.html',
                    controller: 'QuestionListCtrl'
                })
                .state('question', {
                    url: '/questions/:questionId',
                    templateUrl: 'views/question-view.html',
                    controller: 'QuestionViewCtrl'
                })
                .state('create', {
                    url: '/create',
                    templateUrl: 'views/question-create.html',
                    controller: 'QuestionCreateCtrl'
                });
        }
    ]);
})();