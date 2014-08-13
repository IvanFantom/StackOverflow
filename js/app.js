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
                    url: '/question/:questionId',
                    templateUrl: 'views/question-view.html',
                    controller: 'QuestionViewCtrl',
                    //views: {
                    //    'comments': {
                    //        templateUrl: 'views/partials/comments.html'
                    //    }
                    //}
                })
                .state('create', {
                    url: '/create',
                    templateUrl: 'views/question-create.html',
                    controller: 'QuestionCreateCtrl'
                });
        }
    ]);
})();