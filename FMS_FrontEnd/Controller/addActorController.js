
filmApp.controller('addActorController', function($scope) {

    $scope.actors = [{}];

    $scope.addNewActor = function() {
        var newActorNo = $scope.actors.length+1;
        $scope.actors.push({});
    };

    $scope.removeActor = function() {
        var lastActor = $scope.actors.length-1;
        $scope.actors.splice(lastActor);
    };

});
