var app = angular.module('Loopstir');

app.controller('supportController', ['$rootScope','$scope', '$http', '$timeout', function($rootScope, $scope, $http, $timeout) {

    $scope.email = {
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        phonenumber: ''
    }

    $scope.failure = false;
    $scope.success = false;
    $scope.sending = false;

    $scope.sendSupportEmail = function() {

        $scope.sending = true;

        console.log("Sending email");

        if ($scope.email.email == '' || $scope.email.phonenumber == '') {
            // TODO: SEND ERROR
        }

        if ($scope.email.message == '') {
            // TODO: SEND ERROR
        }

        var post = {
            method: 'POST',
            data: {
                FirstName: $scope.email.firstname,
                LastName: $scope.email.lastname,
                Message: $scope.email.message,
                Email: $scope.email.email,
                PhoneNumber: $scope.email.phonenumber
            }
        }


        if ($rootScope.debug) {
            post.url = $rootScope.loopstirApiDev + '/api/email/support';
        }
        else {
            post.url = $rootScope.loopstirApiProd + '/api/email/support';
        }

        console.log(post);

        $http(post)
        .then(function successCallback(response) {

            $scope.sending = false;

            console.log(response);

            $scope.email = {
                firstname: '',
                lastname: '',
                email: '',
                message: '',
                phonenumber: ''
            };

            $scope.success = true;
            $timeout(clearSuccess, 5000);

        }, function errorCallback(response) {

            $scope.sending = false;

            console.log(response);

            $scope.failure = true;
            $timeout(clearFailure, 5000);
        });
    };

    function clearFailure(){
        console.log('cleared success');
        $scope.failure = false;
    }

    function clearSuccess(){
        $scope.success = false;
    }

}]);
