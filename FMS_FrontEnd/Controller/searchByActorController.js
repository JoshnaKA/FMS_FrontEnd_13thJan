
filmApp.controller('searchByActorController',function($scope,searchByActorService){
    console.log("In controller")
//$scope.films=""
$scope.searchByActor = function(firstName,lastName){
    searchByActorService(firstName,lastName).then(function(data){
        console.log(data);
        console.log("IN SIDE SEARCH BY ACTOR FUNCTION")
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