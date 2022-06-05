import React,{useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

const base_url= "https://image.tmdb.org/t/p/original/"

function truncate(str, n){
    return str?.length > n ? str.substr(0,n-1) + '...' : str;
}
function Banner() {
    const [movie, setMovie] = useState([]); 


    useEffect(() => {
        async function fetchData(){
            const request= await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * (request.data.results.length) -1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    console.log(movie);

  return (
    <header className='banner' 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                ${base_url+movie.poster_path}
            )`,
            backgroundPosition : "center center"
        }}
    >
        <div className="banner-contents">
            <h1 className='banner-title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner-buttons">
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <h1 className="banner-description">
                {truncate(movie?.overview,160)}
            </h1>
        </div>
            <div className="bottomFade"/>
    </header>
  )
}

export default Banner;