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

    $scope.sendSupportEmail = function() {

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

        $http(post)
        .then(function successCallback(response) {

            console.log(response);

            $scope.email = {
                firstname: '',
                lastname: '',
                email: '',
                message: '',
                phonenumber: ''
            };

            $scope.success = true;
            $timeout(clearSuccess, 3000);

        }, function errorCallback(response) {
            console.log(response);

            $scope.failure = true;
            $timeout(clearFailure, 3000);
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
