function movieController($scope, movies) {
    
    $scope.filter;
    $scope.movies;
    

      movies.getMovies().then(function (response) {

               $scope.movies = response.data;

         
             }, function (error) {

                console.error(error);
        });
               $scope.filter = function(key){
               $scope.filteredMovies = $scope.movies.filter(function filterByName(movie){
                       return movie.name.indexOf(key) !==-1;
                     });
};
}