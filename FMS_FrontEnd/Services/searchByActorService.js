/**
 * Created by utanelan on 1/11/2016.
 */
filmApp.service('searchByActorService',function($http,$q){
    return function(firstName,lastName){
        //       console.log("In Service")
        console.log('http://localhost:8080/ResultWebService1/searchFilmByActor?firstName='+firstName+'&lastName='+lastName)
        var defer = $q.defer()
        $http.get('http://localhost:8080/ResultWebService1/searchFilmByActor?firstName='+firstName+'&lastName='+lastName).then(
            function(resp){
                console.log("Hererjjjjjjjj")
                defer.resolve(resp.data)
            },
            function(){
                defer.reject('Data Not Received')
            })
        return defer.promise;
    }
})