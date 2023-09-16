import { Routes, Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements } from "react-router-dom";
import React from "react";
import HomePage, { loader as homePageLoader } from "./home";
import MovieCard from "./movieCard";
import ErrorPage  from "./error-page";
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
          <Route >
          <Route path="/" element={<HomePage />}  loader={homePageLoader} errorElement= {<ErrorPage />} />
          <Route path="/movies/:id" element={<MovieCard />}  />
         
          </Route>
         
       
))

export default function App() {

  return (
    <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>

  )
}


//{isValue  ?  movieCards : <img src={"./images/Spinner-1s-176px.gif"} /> } setting the laoding indicator