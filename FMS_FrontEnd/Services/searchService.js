/**
 * Created by win on 07-Jan-16.
 */

filmApp.service('searchService',function($http,$q){
    return function(filmName){
 //       console.log("In Service")
//        console.log('http://localhost:8080/FMSSpringMVC/searchByTitle?filmName='+filmName)
        var defer = $q.defer()
        $http.get('http://localhost:8080/ResultWebService1/searchFilmByTitle?title='+title).then(
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
