import { Link } from 'react-router-dom'
import React from 'react'
import Imdb from './images/imdb.svg'
import Tomato from './images/tomatoes.svg'

export default function Card(props) {
    const [isliked, setIsliked] = React.useState(props.isliked)
    const styles = {
        color: isliked ? "red" : "gray",
    }

    function Toggle(){
    setIsliked(prev => !prev )
    }
  
    //let genresArr = props.genres
    //console.log(props.genres)
    return (
        
            <div className="movie-card" data-testid="movie-card">

               
                <div className='top-card'>
                <Link to={`/movies/${props.id}`}> <img src={`https://image.tmdb.org/t/p/w342${props.poster_path}`}alt="poster" id="poster-img" data-testid="movie-poster" id="poster-img" />
               </Link>
               <div className='heart' >
               <i class="fa-solid fa-heart"  style={styles}  onClick={Toggle} id="fav-heart" ></i>
               </div>
              
                
                
                </div> 

                
                
                
                
            <div className="mid-div-card" >
            <div className="date">
                <p>USA</p>
                <p data-testid="movie-release-date" >{props.release_date}</p>
                </div> 
                <div className="TITLE">
                     <h4 data-testid="movie-title" >{props.title}</h4>
                </div> 
               
                <div className="rating">
                    <div className='imdb'><img src={Imdb} alt="imdb icon" /> <span> {props.vote_average} / 10</span>  </div>
                    <div className='tomato'><img src={Tomato} alt="tomatoe icon" />  <span>{props.vote_average * 10} % </span>  </div>
                    </div>
                                     
            </div>
             <div className='genres-card'>
                    <p>Action</p>
                    <p>Adventure</p>
                    <p>Thriller</p>
             </div>
                
            </div>
        
    )
}

/*function getgenres(){
    console.log(props.genres)
    let genresArr = props.genres
    console.log(genresArr)
    let genres = genresArr.map( genre =>{ genre.name})
    return genres
    } 
    <p data-testid="movie-genre" className='red' > {getgenres}</p>
    
    */