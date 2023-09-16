import { Link } from 'react-router-dom'
import React from 'react'
import Favourite from './images/Favorite.svg'

export default function Card(props) {
    const [isliked, setIsliked] = React.useState(props.isliked)
    const styles = {
        backgroundColor: isliked ? "red" : "transparent"
    }

    function Toggle(){
    setIsliked(prev => !prev )
    }
    console.log(isliked)
    return (
        
            <div className="movie-card" data-testid="movie-card">
               <Link to={`/movies/${props.id}`}> <img src={`https://image.tmdb.org/t/p/w185${props.poster_path}`}alt="poster" data-testid="movie-poster" id="poster-img" />
                <h3 data-testid="movie-title" >{props.title}</h3></Link>
                
                
                <div className="mid-div" >
                    <p data-testid="movie-release-date" >{props.release_date}</p>
                    <img src={Favourite} alt="favbtn"  data-testid="fav-btn" onClick={Toggle} 
                    style={styles}/>
                    
                </div>


            </div>
        
    )
}