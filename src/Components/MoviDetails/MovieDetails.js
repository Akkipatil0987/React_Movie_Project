import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails() {
  const baseURL = 'https://image.tmdb.org/t/p/w500';
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    };

    fetchMovieDetails();
    fetchCast();
  }, [id]);

  return (
    <section className="moviedetails_section">
      <Container>
        <div className="bannersection">
          <div className="banner_img_div">
            <img
              src={`${baseURL}${movieDetails.poster_path}`}
              className="bannerimg"
              alt={movieDetails.title}
            />
          </div>
          <div className="bantext_div">
            <div className="d-flex align-items-center ">
              <div className="smallbanner_img_div">
                <img
                  src={`${baseURL}${movieDetails.backdrop_path}`}
                  className="bannerimg"
                  alt={movieDetails.title}
                />
              </div>
              <div className="ps-3">
                <h5>{movieDetails.title}</h5>
                <p className="text">Rating: {movieDetails.vote_average}</p>
                <p className="text">Runtime: {movieDetails.runtime} minutes</p>
                <p className="text">Release Date: {movieDetails.release_date}</p>
              </div>
            </div>
            <div>
              <h4>Overview</h4>
              <p className="overview text">{movieDetails.overview}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-3 mt-3">Cast</h4>
          <Row>
            {cast.map((actor) => (
              <Col key={actor.id} xxl={3} xl={3} lg={3} md={6} sm={6} className="mb-3">
                <div>
                  <div className="banncard_img_div">
                    <img
                      src={`${baseURL}${actor.profile_path}`}
                      className="bannercardimg"
                      alt={actor.name}
                    />
                  </div>
                  <p className="text mb-0">{actor.name}</p>
                  <p className="text mb-0">{actor.character}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default MovieDetails;
