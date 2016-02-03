'use strict';

angular
    .module('chatApp')
    .service('ChatService', function () {
        var chatData = {
            user: {}
        };
        chatData.setUser = function (data) {
            this.user = data;
        };
        return chatData;

    });