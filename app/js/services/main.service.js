'use strict';

app.service('MainService', ['$http',
    function($http) {

        //TODO: Add this url in a config file
        let mainUrl = 'https://api.olapic.com/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2';

        return {
            getData: (url) => {
                return $http.get((url) ? url : mainUrl);
            }
        };
    }
]);
