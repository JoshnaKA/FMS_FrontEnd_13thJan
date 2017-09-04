
filmApp.controller('searchByCategoryController',function($scope,searchByCategoryService){
    console.log("In controller")
    $scope.films=""
    $scope.searchByCategory = function(category){
        searchByCategoryService(category).then(function(data){
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