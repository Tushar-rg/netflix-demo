// import React,{Component} from "react";
const API_KEY= "6332ef2285b8870155425283face3563";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default requests;