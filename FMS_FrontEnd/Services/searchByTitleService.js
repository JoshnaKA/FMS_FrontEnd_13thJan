/**
 * Created by win on 07-Jan-16.
 */

filmApp.service('searchByTitleService',function($http,$q){
    return function(filmName){
        console.log("In Service")
        console.log('http://localhost:8080/ResultWebService1/searchFilmByTitle?filmName='+filmName)
        var defer = $q.defer()
        $http.get('http://localhost:8080/ResultWebService1/searchFilmByTitle?filmName='+filmName).then(
            function(resp){
                            console.log("Hererjjjjjjjj")
                console.log(resp.data)
                defer.resolve(resp.data)
            },
            function(){
                defer.reject('Data Not Received')
            })
        return defer.promise;
    }
})

/*
filmApp.service('searchByTitleService',function($http){
    return{
        result : function(){
            return $http.get('films.json').then(function(resp){
                return resp.data
            })
        }
    }
});
*/
