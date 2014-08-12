(function () {
    'use strict';

    angular.module('stackoverflow').constant('MONGOLAB_CONFIG', {
        API_KEY: 'Qi1Nfoc0NlGpR0b0AvK2kXC38vOa-cVt',
        DB_NAME: 'stackoverflowdb'
    });

    angular.module('stackoverflow').factory('Question', ['$mongolabResourceHttp',
        function ($mongolabResourceHttp) {
            return $mongolabResourceHttp('questions');
        }
    ]);
})();
