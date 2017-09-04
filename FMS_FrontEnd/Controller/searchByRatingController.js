
filmApp.controller('searchByRatingController',function($scope,searchByRatingService){
    console.log("In controller")
    $scope.films=""
    $scope.searchByRating = function(rating){
        searchByRatingService(rating).then(function(data){
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