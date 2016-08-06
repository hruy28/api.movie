    
function movies($http) {
     var URL = 'http://api-nghyf.rhcloud.com/film/interstellar';       

    this.getMovies = function() {
         return $http.get(URL);    
     };
}