/**
 * Created by utanelan on 1/11/2016.
 */
filmApp.service('viewAllFilmsService',function($http,$q){
    return function(){
        console.log("In Service")
        var defer = $q.defer()
        $http.get('http://localhost:8080/ResultWebService1/displayAllFilms.json').then(
            function(resp){
                defer.resolve(resp.data)
            },
            function(){
                defer.reject('Data Not Received')
            })
        return defer.promise;
    }
})