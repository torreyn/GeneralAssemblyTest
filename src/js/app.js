(function () {

    var app = angular.module('movieSearcher', []);

    app.controller('SearchController', ['$scope', '$http', function ($scope, $http) {
        console.log('SearchController loaded');
        
        $scope.runSearch = function() {
            console.log($scope.query);
            
            $http.get('http://www.omdbapi.com/?s=' + $scope.query + '&r=json').success(function (data) {
                $scope.data = data.Search;
            }).error(function (data) {
                console.log('error with API callback');
            });
        }
    }]);
})();