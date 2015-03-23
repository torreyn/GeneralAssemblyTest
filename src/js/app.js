(function () {

    var app = angular.module('movieSearcher', []);

    app.controller('SearchController', function () {
        // alert('SearchController() loaded');
        this.results = movies.Search;
    });

    var movies = {
        "Search": [
            {
                "Title": "Indiana Jones and the Last Crusade",
                "Year": "1989",
                "imdbID": "tt0097576",
                "Type": "movie"
            },
            {
                "Title": "X-Men: The Last Stand",
                "Year": "2006",
                "imdbID": "tt0376994",
                "Type": "movie"
            },
            {
                "Title": "The Last Samurai",
                "Year": "2003",
                "imdbID": "tt0325710",
                "Type": "movie"
            },
            {
                "Title": "The Last King of Scotland",
                "Year": "2006",
                "imdbID": "tt0455590",
                "Type": "movie"
            },
            {
                "Title": "The Last Airbender",
                "Year": "2010",
                "imdbID": "tt0938283",
                "Type": "movie"
            },
            {
                "Title": "The Last Stand",
                "Year": "2013",
                "imdbID": "tt1549920",
                "Type": "movie"
            },
            {
                "Title": "The Last of the Mohicans",
                "Year": "1992",
                "imdbID": "tt0104691",
                "Type": "movie"
            },
            {
                "Title": "Avatar: The Last Airbender",
                "Year": "2005–2008",
                "imdbID": "tt0417299",
                "Type": "series"
            },
            {
                "Title": "I Know What You Did Last Summer",
                "Year": "1997",
                "imdbID": "tt0119345",
                "Type": "movie"
            },
            {
                "Title": "Last Action Hero",
                "Year": "1993",
                "imdbID": "tt0107362",
                "Type": "movie"
            }
        ]
    };

})();