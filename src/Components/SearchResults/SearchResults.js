import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import './SearchResults.css';
import Paginations from '../CommonComponents/Paginations/Paginations';

function SearchResults() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`)
      .then(response => {
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  }, [query]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='serach_sectionss'>
      <Container>
        <h2>Search Results for "{query}"</h2>
        <div className="movie-list">
          <Row>
            {currentItems.map(movie => (
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} className='mb-3' key={movie.id}>
                <div className='searchimg_div'>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='searchresultimg' />
                </div>
                <h3 className='text text-center'>{movie.title}</h3>
              </Col>
            ))}
          </Row>
          <Paginations
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={searchResults.length}
            paginate={(pageNumber) => setCurrentPage(pageNumber)}
          />
        </div>
      </Container>
    </div>
  );
}

export default SearchResults;
