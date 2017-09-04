/**
 * Created by win on 10-Jan-16.
 */
filmApp.controller('addFilmController',function($scope,addFilmService){
    console.log("In controller")

    $scope.addFilm = function(actors){
//        alert('Under Constructoin');

        console.log("In Funciton")
        $scope.film.actors=actors;
        console.log($scope.film);
        addFilmService($scope.film);
    }
})