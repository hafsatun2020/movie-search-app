import { useState, useEffect } from 'react';
import { useLoaderData, useSearchParams } from "react-router-dom"
import Card from './card';
import Footer from './footer'
import Header from './header'
import {getMovies} from'./api'

import Right from'./images/Chevron-right.png'



export function loader() {
    //throw new Error("This is an error")
    return getMovies()
}


export default function HomePage() {
    //fetch top rated movies x 10 and stores them in a state

    const moviesDataArr = useLoaderData()
    console.log(moviesDataArr)
    

    let movieCards = moviesDataArr.map((item) => {
        return <Card
            key={item.id}
            isliked ={false}
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
                        {movieCards}
                </div>
                <Footer />
            </div>
        </>
    )
}
