(function () {

    var app = angular.module('movieSearcher', []);

    app.controller('SearchController', ['$scope', '$http', function ($scope, $http) {
        // console.log('SearchController loaded');
        
        // search movie
        $scope.runSearch = function() {
            $http.get('http://www.omdbapi.com/?s=' + $scope.query + '&r=json').success(function (data) {
                $scope.data = data.Search;
                $scope.notFound = false;
                if (data.Search == undefined){
                    $scope.notFound = true;
                };
            }).error(function (data) {
                console.log('error calling API');
            });
        }
        
        // movie found, show plot and info
        $scope.findMovie = function(movieTitle){
            console.log('findMovie() called with ' + movieTitle);
            
            $http.get('http://www.omdbapi.com/?t=' + movieTitle + '&plot=long&r=json').success(function(data) {
                console.log(data);
                $scope.movieReturned = data;
                $scope.data = '';
            }).error(function(data) {
                console.log('error calling API');
            });
        };
        
        $scope.reset = function(){
            console.log('reset() called');
            $scope.movieReturned = '';
            $scope.query = '';
            
        };
        
        
    }]);
})();