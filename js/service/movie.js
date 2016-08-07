    
function movies($http) {
            

    this.getMovies = function() {
         return $http.get('http://api-nghyf.rhcloud.com/films');    
     };
}