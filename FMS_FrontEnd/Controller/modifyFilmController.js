

filmApp.controller('modifyFilmController',function($scope,searchByTitleService,modifyFilmService){
    //console.log("In controller")
    console.log($scope.film);
    //$scope.actors = [{first_name:'',last_name:''}];
    $scope.searchFilm = function(filmName){
        searchByTitleService(filmName).then(function(data){
            $scope.film = data[0];
            $scope.actors=$scope.film.actors;
           // console.log($scope.data.actors + '@@@@@@@@@@@')
            console.log($scope.film.actors)
        })
    };

    $scope.addActor = function() {
        var newActorNo = $scope.actors.length+1;
        $scope.actors.push({first_name:'',last_name:''});
    };

    $scope.deleteActor = function() {
        var lastActor = $scope.actors.length-1;
        $scope.actors.splice(lastActor);
    };

    $scope.modifyFilm = function(targetTitle){
        console.log($scope.film);
        console.log("Modify Controller");
        console.log(targetTitle);
        //console.log(updatedFilm);
        modifyFilmService(targetTitle,$scope.film)
    }
})