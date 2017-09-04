
filmApp.service('deleteFilmService',function($http,$q){
    return function(filmName){
        //       console.log("In Service")
        console.log('http://localhost:8080/ResultWebService1/removeFilm?filmName=' + filmName)
        var defer = $q.defer()
        $http.get('http://localhost:8080/ResultWebService1/removeFilm?filmName=' + filmName).then(
            function(resp){
                console.log("Movie Deleted")
                defer.resolve(resp.data)
            },
            function(){
                defer.reject('No Records Found')
            })
        return defer.promise;
    }
})