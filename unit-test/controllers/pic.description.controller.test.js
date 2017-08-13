'use strict';

describe('Testing PicDescriptionController ', () => {
    var _scope,
        _PicDescriptionController,
        _modalInstance,
        _uibModal;

    beforeEach(
        module('agvarea-app')
    );

    beforeEach(inject(($injector) => {
        _uibModal = $injector.get('$uibModal');
    }));

    beforeEach(inject(($rootScope, $controller) => {
        _scope = $rootScope.$new();

        _modalInstance = {
            close: jasmine.createSpy('modalInstance.close'),
            open: jasmine.createSpy('modalInstance.open')
        };

        _PicDescriptionController = $controller('PicDescriptionController', {
            $scope: _scope,
            picture: () => { return {}; },
            $uibModalInstance: _modalInstance
        });
    }));

    describe('Initial state', () => {
        it('should instantiate the controller properly', () => {
            expect(_PicDescriptionController).not.toBeUndefined();
        });

        it('should close the modal when button close pressed', () => {
            _scope.close();
            expect(_modalInstance.close).toHaveBeenCalled();
       });
    });

});
