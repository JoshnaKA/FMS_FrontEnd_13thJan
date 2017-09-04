
filmApp.controller('viewAllFilmsController',function($scope,viewAllFilmsService){
    console.log("In controller")
    viewAllFilmsService().then(function(data){
            $scope.films = data;

    })
})