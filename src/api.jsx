import { useParams, Link } from 'react-router-dom'
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTc5NjMyMjViN2QyMWZjYzFmZTYxODRkNjhhZjZkZCIsInN1YiI6IjY0ZmY0YzgwZWZlYTdhMDEzN2QxZDhkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6GTJum53onx8nW2a4NH6qS6VpnAErFq2huc9n4tEYc'
    }
};

export async function getMovies() {
    
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    if (!res.ok) {
        throw {
            message: "Failed to fetch Movies", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    let movies = data.results
                movies = movies.splice(0,10)
    return movies
}


export async function getMoviesDetails() {
    //get Id of movie via use params
    const { id } = useParams()
    //const [movie, setMovieDetails] = useState({})
   // console.log(id)
//fetch movies using params and store in a state
    
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
    if (!res.ok) {
        throw {
            message: "Failed to fetch Movies", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    let movieDetails = data.results
                
    return movieDetails
}