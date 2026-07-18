const movies = [{id:1, name:"Iron Man"},
                {id:2, name:"Incredible Hulk"},
                {id:3, name:"Thor"}]

function Movies(){
    return (
        <>
            {movies.map(movie =>
            (<h2>{movie.id} {movie.name}</h2>)
            )}
        </>
    );
}

export default Movies;