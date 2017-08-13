'use strict';

 describe('Testing MainService', () => {
    var url = 'https://api.olapic.com/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2';
    var _MainService, _httpBackend;


    beforeEach(
        module('agvarea-app')
    );

    beforeEach(inject(($injector) => {
        _MainService = $injector.get('MainService');
        _httpBackend = $injector.get('$httpBackend');
    }));

    it('Getting data without url param', () => {
        let response = { metadata: {
                            code: 200,
                            message: "OK",
                            version: "v2.2"
                        },
                        data: {
                            _links: {
                                next: { href: 'http://next.page.example.com' }
                            }
                        }};
        _httpBackend.whenGET(url).respond(200, response);

        _MainService.getData().then((response) => {
            expect(response.status).toEqual(200);
            expect(response.data.metadata.version).toEqual('v2.2');
            expect(response.data.data._links.next.href).toEqual('http://next.page.example.com');
        });
        _httpBackend.flush();
    });

    it('Getting data with url param', () => {
        let urlTest = 'http://example.api.com';
        let response = { metadata: {
                            code: 200,
                            message: "OK",
                            version: "v2.2.1"
                        },
                        data: {
                            _links: {
                                next: { href: 'http://next.page.example2.com' }
                            }
                        }};
        _httpBackend.whenGET(urlTest).respond(200, response);

        _MainService.getData(urlTest).then((response) => {
            expect(response.status).toEqual(200);
            expect(response.data.metadata.version).toEqual('v2.2.1');
            expect(response.data.data._links.next.href).toEqual('http://next.page.example2.com');
        });
        _httpBackend.flush();
    });

});
