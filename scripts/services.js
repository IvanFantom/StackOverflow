'use strict';

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Question', ['$resource',
    function ($resource) {
        return $resource('questions/:questionId.json', {}, {
            query: { method: 'GET', params: { questionId: 'questions' }, isArray: true },
            save: { method: 'POST' },
            update: { method: 'PUT' },
            get: { method: 'GET', isArray: false }
        });
    }
]);