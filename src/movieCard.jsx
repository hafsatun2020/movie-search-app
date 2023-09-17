import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Expand from './images/Expand-Arrow.png'
import Star from './images/Star.png'
import TV from "./images/tv.png"
import TVShow from './images/TV-Show.png'
import HomeLogo from "./images/Home.png"
import Logout from "./images/Logout.png"
import Calender from './images/Calendar.png'
import MovieProjector from "./images/Movie-Projector.png"

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTc5NjMyMjViN2QyMWZjYzFmZTYxODRkNjhhZjZkZCIsInN1YiI6IjY0ZmY0YzgwZWZlYTdhMDEzN2QxZDhkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6GTJum53onx8nW2a4NH6qS6VpnAErFq2huc9n4tEYc'
    }
};

export default function MovieCard() {
    //get Id of movie via use params
    const { id } = useParams()
    const [movie, setMovieDetails] = useState({})
    //console.log(id)
//fetch movies using params and store in a state
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            .then(response => response.json())
            .then(data => setMovieDetails(data) )
            .catch(err => console.error(err));
    }, [])
   
    console.log()
    
    //console.log(genres)

        return (
        <div className='preview-container'>
        < div className='menu-preview'>
                <div className="logo">
                    <img src={TV} id="tv-logo" alt="tc logo"/>
                    <h2>Movie Box</h2>
                </div>
                <div className='nav'>
                    <div className='nav-link'><img src={HomeLogo} alt="logo home"/><p>Home</p></div>
                    <div className='nav-link pink'><img src={MovieProjector} alt="logo projector"/><p>Movies</p></div>
                    <div className='nav-link'><img src={TVShow} alt="logo tv show"/><p>TV Series</p></div>
                    <div className='nav-link'><img src={Calender} alt="logo calender"/><p>Upcoming</p></div>
                </div>
                
                <div className='pink-box'>
                    <h4>Play movie quizes and earn free tickets</h4>
                    <p>50k people are playing now</p>
                    <button>Play NOw</button>
                </div>
                <div className='logout' ><a href="#"><img src={Logout} alt="logout logo"/>Logout</a></div>
                
        </div>
         <div className="movie-preview" >
            
            
           
            <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} data-testid="movie-poster" id="backdrop-img" alt="backdrop" />
            <div className="mid-div-movie-details" >
                <p data-testid="movie-title" >{movie.title}</p>
                <p data-testid="movie-release-date" > {movie.release_date}</p>
                <p data-testid="movie-runtime" > {movie.runtime}</p>
                <div className="genres">
                    { movie?.genres && 
                    movie?.genres.map((genre) =>( 
                     <p 
                    key={genre.id} 
                    className='see'
                     > 
                    {genre.name}
                    </p> )) 
                    }
                     
                  </div>
                <img src={Star}  id="star" alt="star"/>
                <p data-testid="movie-votes" >{ movie.vote_average}</p>

            </div>
            
            <div className="bottom">

            <div className='left'>
            <p data-testid="movie-overview" >{movie.overview}</p>
         
            <p>Director: <span className='see' >Tom Cruise</span> </p>
            <p>Writers: <span className='see' >Josh, Aniekan and Thomas</span></p>
            <p>Actors: <span className='see' > Salena Fomez and Thomas Blair</span></p>
            <div className='btns'>
                <p className='red'>Top rated movies #{}</p>
                <p>Awards 9 nominations</p>
                <img src={Expand} alt="arrow" className='expand' />
            </div>
            </div>
            <div className='right'>
                <button className='red'>See show times</button>
                <button className='pink'>More watch options</button>
            </div>
            </div>
            
            
            
        </div>
        </div>
       
       

        
    )
}
