/**
 * Created by win on 02-Jan-16.
 */
var filmApp = angular.module('filmApp' , ['ngResource','ngRoute']);
filmApp.config(function($routeProvider){
    $routeProvider.when('/newFilm',{
        templateUrl : 'Pages/addFilm.html',
        controller : 'addFilmController'
    })
        .when('/modifyFilm',{
            templateUrl : 'Pages/modifyFilm.html',
            controller : 'modifyFilmController'
        })
        .when('/removeFilm',{
            templateUrl : 'Pages/deleteFilm.html',
            controller : 'removeFilmController'
        })
        .when('/searchByTitle',{
            templateUrl : 'Pages/searchByTitle.html',
            controller: 'searchByTitleController'
        })
        .when('/searchByActor',{
            templateUrl : 'Pages/searchByActor.html',
            controller : 'searchByActorController'
        })
        .when('/searchByCategory',{
            templateUrl : 'Pages/searchByCategory.html',
            controller : 'searchByCategoryController'
        })
        .when('/searchByLanguage',{
            templateUrl : 'Pages/searchByLanguage.html',
            controller : 'searchByLanguageController'
        })
        .when('/searchByRating',{
            templateUrl : 'Pages/searchByRating.html',
            controller : 'searchByRatingController'
        })
        .when('/viewAllFilms',{
            templateUrl : 'Pages/viewAllFilms.html',
            controller : 'viewAllFilmsController'
        })
})