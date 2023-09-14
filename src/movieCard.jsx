import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Favourite from './images/Favorite.svg'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTc5NjMyMjViN2QyMWZjYzFmZTYxODRkNjhhZjZkZCIsInN1YiI6IjY0ZmY0YzgwZWZlYTdhMDEzN2QxZDhkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6GTJum53onx8nW2a4NH6qS6VpnAErFq2huc9n4tEYc'
    }
};

export default function MovieCard() {

    const { id } = useParams()
    const [movie, setMovieDetails] = useState({})
    console.log(id)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            .then(response => response.json())
            .then(data => setMovieDetails(data) )
            .catch(err => console.error(err));
    }, [])

    console.log(movie)


    return (
        <div className="movie-preview" data-testid="movie-card">
            <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} data-testid="movie-poster" id="backdrop-img" alt="backdrop" />
            <a href="#"><h1 data-testid="movie-title" >{movie.title}</h1></a>
            <p data-testid="movie-overview" >{movie.overview}</p>
            <div className="mid-div" >
                <p data-testid="movie-release-date" >Release date: {movie.release_date}</p>
                <p data-testid="movie-runtime" >Runtime{movie.runtime}</p>
                <img src={Favourite} id="fav-btn" data-testid="fav-btn"  alt="fabvtn"/>

            </div>
        </div>
       

        
    )
}
//https://image.tmdb.org/t/p/w92/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
//https://image.tmdb.org/t/p/w154/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
//https://image.tmdb.org/t/p/w185/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
//https://image.tmdb.org/t/p/w342/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
//https://image.tmdb.org/t/p/w500/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
//https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
//https://image.tmdb.org/t/p/original/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg