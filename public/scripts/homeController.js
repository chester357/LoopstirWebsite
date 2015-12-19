var app = angular.module('Loopstir');

app.controller('homeController', ['$rootScope','$scope', '$http', function($rootScope, $scope, $http) {

    console.log("Wired up");

    $scope.contact = {
        name: 'unknown',
        email: ''
    };

    $scope.addContact = function(contact) {
        console.log(contact);
        $http({
            method: 'POST',
            url: 'http://54.152.165.228/api/Account/Contact',
            data: {
                Email: contact.email,
                Name: 'testing'
            }
        }).then(function successCallback(response) {
            console.log('Success');
            console.log(response);

            if (response.status == 200) {

                // success, notify UI

            }

        }, function errorCallback(response) {
            console.log('Failure');
            console.log(response);
        });
    };

}]);
