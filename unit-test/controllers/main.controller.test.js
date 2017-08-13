'use strict';

describe('Testing MainController ', () => {
    var _scope,
        _MainController,
        _modalInstance,
        _angularGridInstance,
        _actualPicture,
        _uibModal,
        _MainService;

    var picture = {
            id: "123456",
            original_source: "https://www.instagram.com/p/example_id/",
            caption: "Caption example here",
            date_submitted: "2016-01-20T18:08:48+00:00",
            status: "approved",
            likes: "7",
            images: {
                normal: "https://image.example4.com/picture.jpg",
                original: "https://image.example5.com/picture.jpg"
            },
            _embedded: {
                avatar_url: "https://avatar.example.com/avatar.jpg"
            }
        };

    var response = {
        data: {
            data: {
                _embedded: {
                    media: [
                        {
                            id: '123'
                        },
                        {
                            id: '456'
                        }
                    ]
                },
                _links:{
                    next: {
                        href: 'next.page.url'
                    }
                }
            },
        }
    };

    beforeEach(
        module('agvarea-app')
    );

    beforeEach(inject(($injector) => {
        _uibModal = $injector.get('$uibModal');
        _angularGridInstance = $injector.get('angularGridInstance');
    }));

    beforeEach(inject(($rootScope, $controller) => {
        _scope = $rootScope.$new();

        _modalInstance = {
            close: jasmine.createSpy('modalInstance.close'),
            open: jasmine.createSpy('modalInstance.open')
        };

        _MainService = {
            getData: () => {
                return {
                    then: (callback) => {
                        return callback(response);
                    }
                };
            }
        };

        _MainController = $controller('MainController', {
            $scope: _scope,
            $uibModalInstance: _modalInstance,
            $uibModal: _uibModal,
            angularGridInstance: _angularGridInstance,
            MainService: _MainService
        });

        spyOn(_MainService, 'getData').and.callThrough();
    }));

    describe('Initial state', () => {
        it('should instantiate the controller properly', () => {
            expect(_MainController).not.toBeUndefined();
        });

        it('should get data when the controller is initiated', () => {

            expect(_scope.pics[0].id).toEqual('123');
            expect(_scope.pics[1].id).toEqual('456');
        });
    });

    describe('Get more pictures', () => {
        it('should get more pictures when load more button is pressed', () => {
            _scope.loadMore();
            expect(_scope.pics.length).toEqual(4);
        });
    });

    describe('Open lightbox', () => {
        it('should open the lightbox when button open is pressed', () => {
            spyOn(_uibModal, 'open').and.callFake((picture) => {
                _actualPicture = picture;
                return picture;
            });

            _scope.openDescription(picture);
            expect(_uibModal.open).toHaveBeenCalled();
            expect(_actualPicture.resolve.picture()).toEqual(picture);
       });
    });

});
