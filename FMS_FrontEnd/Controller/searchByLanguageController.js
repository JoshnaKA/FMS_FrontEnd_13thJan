
filmApp.controller('searchByLanguageController',function($scope,searchByLanguageService){
    console.log("In controller")
    $scope.films=""
    $scope.searchByLanguage = function(language){
        searchByLanguageService(language).then(function(data){
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