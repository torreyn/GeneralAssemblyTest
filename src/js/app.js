(function () {

    var app = angular.module('movieSearcher', []);

    app.controller('SearchController', ['$scope', '$http', function ($scope, $http) {
        console.log('SearchController loaded');
        
        $http.get('http://www.omdbapi.com/?s=last&r=json').success(function (data) {
            $scope.data = data.Search;
        }).error(function (data) {
            console.log('error with API callback');
        });

    }]);
    
})();