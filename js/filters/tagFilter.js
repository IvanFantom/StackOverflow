(function () {
    'use strict';

    angular.module('stackoverflow').filter('tagFilter', function () {
        return function (query, tagName) {

            if (!tagName) {
                return query;
            }

            var lowerCasedTag = tagName.toLowerCase();

            var result = query.filter(function (element) {
                var tags = element.tags;

                var passed = tags.some(function (value) {
                    var lowerCasedValue = value.text.toLowerCase();
                    return lowerCasedValue.indexOf(lowerCasedTag) !== -1;
                });

                return passed;
            });

            return result;
        }
    });
})();