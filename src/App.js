import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Foot from './Foot'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX FAKES" largeRow="true" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Horror" fetchUrl={requests.fetchHorror}/>
      <Row title="Action" fetchUrl={requests.fetchAction}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedy}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentary}/>
      <Row title="Romance" fetchUrl={requests.fetchRomance}/>
      <Foot />
    </div>
  );
}

export default App;
