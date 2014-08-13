(function () {
    'use strict';

    angular.module('stackoverflow').constant('MONGOLAB_CONFIG', {
        API_KEY: 'Qi1Nfoc0NlGpR0b0AvK2kXC38vOa-cVt',
        DB_NAME: 'stackoverflowdb'
    });

    angular.module('stackoverflow').factory('Question', ['$mongolabResourceHttp', 'uuid',
        function ($mongolabResourceHttp, uuid) {
            var self = $mongolabResourceHttp('questions');

            self.prototype.addCommentToQuestion = function (comment) {
                comment.date = new Date();

                this.comments = this.comments || [];
                this.comments.push(comment);
                this.$update();
            }

            self.prototype.addAnswer = function (answer) {
                answer.id = uuid.newguid();
                answer.date = new Date();

                this.answers = this.answers || [];
                this.answers.push(answer);
                this.$update();
            }

            self.prototype.addCommentToAnswer = function (comment, answerId) {
                comment.date = new Date();

                var len = this.answers.length;
                for (var i = 0; i < len; i++) {
                    var answer = this.answers[i];
                    if (answer.id === answerId) {
                        answer.comments = answer.comments || [];
                        answer.comments.push(comment);
                        break;
                    }
                }

                this.$update();
            }

            return self;
        }
    ]);
})();