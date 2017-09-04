
filmApp.service('addFilmService',function($http,$q){
    return function(film){
        console.log("In Service")
        console.log(film);
//        var str = jQuery.param(params);
        //console.log(jQuery.param(params))
        //console.log('http://localhost:8080/FMSSpringMVC/addFilm')
//        console.log('http://localhost:8080/FMSSpringMVC/addFilm?title='+film.title+'&description='+film.description+'&release_year='+film.release_year+'&language.name='+film.language.name+'&length='+length+'&rating='+film.rating+'&special_features='+film.spcial_features+'&category.name='+film.category.name+'&actors='+film.actors);
        console.log('http://localhost:8080/ResultWebService1/addFilm',{params:angular.toJson(film)});
        var defer = $q.defer()
        $http.post('http://localhost:8080/ResultWebService1/addFilm', angular.toJson(film)).then(
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