'use strict';

app.controller('PicDescriptionController',
    function($scope, $uibModalInstance, picture) {

        $scope.picture = picture;

        $scope.close = function () {
           $uibModalInstance.close();
       };

    }
);
