import { Link } from 'react-router-dom'

export default function Card(props) {
    //console.log(props.poster_path, props.id)
    return (
        <Link to={`/movies/${props.id}`}>
            <div className="movie-card" data-testid="movie-card">
                <img src={`https://image.tmdb.org/t/p/w185${props.poster_path}`} data-testid="movie-poster" id="poster-img" />
                <a href="./movies.html"><h3 data-testid="movie-title" >{props.title}</h3></a>
                <div className="mid-div" >
                    <p data-testid="movie-release-date" >{props.release_date}</p>
                    <img src="./images/Favorite.svg" id="fav-btn" data-testid="fav-btn" />

                </div>


            </div>
        </Link>
    )
}