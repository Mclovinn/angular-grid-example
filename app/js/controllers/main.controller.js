'use strict';

app.controller('MainController', ['$scope', 'MainService', 'angularGridInstance', '$uibModal', 'lodash',
    function ($scope, MainService, angularGridInstance, $uibModal, _) {

        var nextPage = '';
        $scope.pics = [];
        $scope.message = "Images Gallery";
        $scope.gridWidth = 300;
        $scope.angularGridOptions = {
            gridWidth : 300,
            gutterSize : 10,
            refreshOnImgLoad : true
        };

        MainService.getData().then(
            (response) => {
                nextPage = response.data.data._links.next.href;
                $scope.pics = response.data.data._embedded.media;
            }, (errorResponse) => {
                //TODO: manage error response
            }
        );

        $scope.openDescription = (selectedPicture) => {
            let modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/partials/pic.description.view.html',
                controller: 'PicDescriptionController',
                size: 'lg',
                resolve: {
                    picture: () => {
                        return selectedPicture;
                    }
                }
            });
        };

        $scope.loadMore = () => {
            MainService.getData(nextPage).then(
                (response) => {
                    let newPics = response.data.data._embedded.media;
                    nextPage = response.data.data._links.next.href;
                    _.forEach(newPics, (picture) => {
                        $scope.pics.push(picture);
                    });
                }, (errorResponse) => {
                    //TODO: Manage error response
                }
            );
        };

    }
]);
