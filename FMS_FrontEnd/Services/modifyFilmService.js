/**
 * Created by utanelan on 1/11/2016.
 */
filmApp.service('modifyFilmService',function($http,$q){
    return function(targetTitle,film){
        console.log("In Modify Film Service")
        console.log(film);
        console.log(targetTitle);
//        var str = jQuery.param(params);
        //console.log(jQuery.param(params))
        //console.log('http://localhost:8080/FMSSpringMVC/addFilm')
//        console.log('http://localhost:8080/FMSSpringMVC/addFilm?title='+film.title+'&description='+film.description+'&release_year='+film.release_year+'&language.name='+film.language.name+'&length='+length+'&rating='+film.rating+'&special_features='+film.spcial_features+'&category.name='+film.category.name+'&actors='+film.actors);
        console.log('http://localhost:8080/ResultWebService1/modifyFilm',angular.toJson(film)+'&targetTitle='+targetTitle);
        var defer = $q.defer()
        $http.post('http://localhost:8080/ResultWebService1/modifyFilm?targetTitle='+targetTitle, angular.toJson(film)).then(
            function(resp){
                console.log("Hererjjjjjjjj")
                defer.resolve('Film Added')
            },
            function(){
                defer.reject('Data Not Received')
            })
        return defer.promise;
    }
})