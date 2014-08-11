'use strict';

var appServices = angular.module('appServices', ['ngResource', 'mongolabResourceHttp']);

appServices.constant('MONGOLAB_CONFIG', {
    API_KEY: 'Qi1Nfoc0NlGpR0b0AvK2kXC38vOa-cVt',
    DB_NAME: 'stackoverflowdb'
});

//appServices.factory('Question', ['$resource',
//    function ($resource) {
//        return $resource('questions/questions.json', {}, {
//            query: { method: 'GET', params: { questionId: 'questions' }, isArray: true },
//            save: { method: 'POST' }
//        });
//    }
//]);

appServices.factory('Question', ['$mongolabResourceHttp',
    function($mongolabResourceHttp) {
        return $mongolabResourceHttp('questions');
    }
]);