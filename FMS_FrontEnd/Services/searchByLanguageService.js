/**
 * Created by utanelan on 1/11/2016.
 */
filmApp.service('searchByLanguageService',function($http,$q){
    return function(language){
        //       console.log("In Service")
        console.log("http://localhost:8080/ResultWebService1/searchFilmByLanguage?language="+language)
        var defer = $q.defer()
        $http.get('http://localhost:8080/ResultWebService1/searchFilmByLanguage?language=' + language).then(
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