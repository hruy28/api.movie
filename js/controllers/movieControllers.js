function movieController($scope, movies) {
    
    
    $scope.movies;

      movies.getMovies().then(function (response) {

               $scope.movies = {
                    title: response.data.Title,
                    image: response.data.Poster,
                    year: response.data.Year,
                    genre: response.data.Genre,
                    actors: response.data.Actors,
                    director: response.data.Director,
                    story: response.data.Plot
           
                };

         
             }, function (error) {

                console.error(error);
        });
        
}