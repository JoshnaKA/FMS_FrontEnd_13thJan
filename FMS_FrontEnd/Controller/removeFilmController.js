
filmApp.controller('removeFilmController',function($scope,deleteFilmService){
    console.log("In controller")
    $scope.removeFilm = function(filmName){
        deleteFilmService(filmName).then(function(data){
            console.log(data);
            if (data){
                $scope.status="Movie Deleted Successfully"
            }
            else{
                $scope.status="OOPs..No Records Found"
            }
            console.log($scope.status);
        });
    }
})