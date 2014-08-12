(function () {
    'use strict';

    var app = angular.module('stackoverflow', ['ngRoute',
        'appControllers',
        'appFilters',
        'appServices'
    ]);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/questions', {
                    templateUrl: 'question-list.html',
                    controller: 'QuestionListCtrl'
                }).
                when('/questions/:questionId', {
                    templateUrl: 'question-view.html',
                    controller: 'QuestionViewCtrl'
                }).
                when('/create', {
                    templateUrl: 'question-create.html',
                    controller: 'QuestionCreateCtrl'
                }).
                otherwise({
                    redirectTo: '/questions'
                });
        }
    ]);
})();