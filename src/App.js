import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';

import Header from './Components/Header/Header';
import Popular from './Components/Popular/Popular';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upcoming from './Components/Upcoming/Upcoming';
import Top_Rated from './Components/Top_Rated/Top_Rated';
import MovieDetails from './Components/MoviDetails/MovieDetails';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import SearchResults from './Components/SearchResults/SearchResults';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Popular/>} />
        <Route path="/upcoming" element={<Upcoming/>} />
        <Route path="/toprated" element={<Top_Rated/>} />
        <Route path="/moviedetails/:id" element={<MovieDetails/>} />
        <Route path="/searchresults/:query" element={<SearchResults/>} />
     

      </Routes>
      </Router>
    </>
  );
}

export default App;

