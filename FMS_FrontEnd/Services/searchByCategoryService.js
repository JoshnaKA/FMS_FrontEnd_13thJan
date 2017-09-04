/**
 * Created by utanelan on 1/11/2016.
 */
filmApp.service('searchByCategoryService',function($http,$q){
    return function(category){
        //       console.log("In Service")
        console.log("http://localhost:8080/ResultWebService1/searchFilmByCategory?category="+category)
        var defer = $q.defer()
        $http.get('http://localhost:8080/ResultWebService1/searchFilmByCategory?category=' + category).then(
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