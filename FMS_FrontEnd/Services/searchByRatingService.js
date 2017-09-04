/**
 * Created by utanelan on 1/11/2016.
 */

filmApp.service('searchByRatingService',function($http,$q){
    return function(rating){
        //       console.log("In Service")
        console.log("http://localhost:8080/ResultWebService1/searchFilmByRating?rating="+rating)
        var defer = $q.defer()
        $http.get('http://localhost:8080/ResultWebService1/searchFilmByRating?rating=' + rating).then(
            function(resp){
                //             console.log("Hererjjjjjjjj")
                defer.resolve(resp.data)
            },
            function(){
                defer.reject('Data Not Received')
            })
        return defer.promise;
    }
})