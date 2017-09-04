

filmApp.controller('searchByTitleController',function($scope,searchByTitleService){
    console.log("In controller");
    //$scope.films="";
    $scope.searchByTitle = function(filmName){
        console.log(filmName);
        searchByTitleService(filmName).then(function(data){
          //  $scope.films = data;
            console.log(data);
            if (data){
                console.log("Entered to If")
                $scope.films=data;
                $scope.status = '';
            }
            else{
                $scope.films='';
                $scope.status = 'OOPs... No Records Found'
            }

        })
    }
})

/*
filmApp.controller('searchByTitleController',function($scope,$http,searchService){
    $scope.t="welcome";
    searchService.result().then(function(responce){
        console.log(responce)
        $scope.films = responce.films
    })
})*/
