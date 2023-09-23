import { useState, useEffect } from 'react';
import { useLoaderData, useSearchParams } from "react-router-dom"
import Card from './card';
import Footer from './footer'
import Header from './header'
import {getMovies} from'./api'
import loadIcon from './images/Spinner-1s-176px.gif'
import Right from'./images/Chevron-right.png'



export function loader() {
    return getMovies()
}


export default function HomePage() {
    //fetch top rated movies x 10 and stores them in a state
    const [loading, setLoading] = useState(false)
    const moviesDataArr = useLoaderData()
    console.log(moviesDataArr)
    

    let movieCards = moviesDataArr.map((item) => {
        return <Card
            key={item.id}
            //isliked ={false}
            {...item}
        />
    })

   

    return (
        <>
            <div className="top">
                <Header  />
            </div>
            <div className="container">
                <div className="heading">
                    <h1>Featured movies</h1>
                    <div className="see-more">

                    <a href="#" className="see more"><span>See more</span><img src={Right} alt="left" /></a>
                    </div>
                    
                
                </div>
                <div className="card-container">
                        { movieCards ? movieCards: <img src={loadIcon} alt="load"/>  }
                </div>
                <Footer />
            </div>
        </>
    )
}
