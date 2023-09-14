import { useState, useEffect } from 'react';
import Card from './card';
import Footer from './footer'
import Header from './header'


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTc5NjMyMjViN2QyMWZjYzFmZTYxODRkNjhhZjZkZCIsInN1YiI6IjY0ZmY0YzgwZWZlYTdhMDEzN2QxZDhkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6GTJum53onx8nW2a4NH6qS6VpnAErFq2huc9n4tEYc'
    }
};

export default function HomePage() {


    //takes input element value dynamically
    // const [searchValue, updateSearch] = useState('')
    // const [isValue, setIsValue] = useState(false);

    // function SearchClicked() {
    //     //fetch api on click function
    //     setIsValue(prev => !prev)
    // }
    // const handleChange = e => { updateSearch(e.target.value); console.log(searchValue) }
    // React.useEffect(function () {
    //     fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options)
    //         .then(response => response.json())
    //         .then(data => { setMovieData(data.results) })
    //         .catch(err => console.error(err));
    //     // eslint-disable-next-line no-unused-expressions
    // }, [isValue])




    //fetch top rated movies x 10 and stores them in a state
    const [movieData, setMovieData] = useState([])

    useEffect(function () {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => { setMovieData(data.results) })
            .catch(err => console.error(err));
    }, [movieData])

    const moviesDataArr = movieData

    let movieCards = moviesDataArr.map((item) => {
        return <Card
            key={item.id}
            {...item}
        />
    })

    return (
        <>
            <div className="top">
                <Header

                />
            </div>
            <div className="container">

                <div className="heading">
                    <h1>Top Ten Rated movies</h1>
                    <a href="#" className="see more"> See more <span>  </span></a>
                </div>
                <div className="card-container">
                    {/* { isValue ? setInterval(() => {movieCards; setIsValue(false)}, 8000) : movieCards } */}
                    {movieCards}
                </div>
                <Footer />
            </div>
        </>
    )
}

//{isValue  ?  movieCards : <img src={"./images/Spinner-1s-176px.gif"} /> } setting the laoding indicator