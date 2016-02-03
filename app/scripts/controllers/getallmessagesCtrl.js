'use strict';

angular.module('chatApp')
  .controller('GetAllMessagesCtrl', function ($scope, AjaxFactory) {
    $scope.getAllMessages = function(){
        // kutsu signUp-funktiota AjaxFactorystä
        var request = AjaxFactory.getAllMessages();
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
