import React, { useEffect } from 'react';

// Utils & Services
import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

// Components
import Rating from '../../components/rating';
import Loader from '../../components/loader';

// Actions
import { fetchMovieById } from '../../actions/moviesActions';

// Constants
import { IMG_PATH } from '../../constants';

// Styles
import './styles.scss';

const Detail = ({ movie, loading, fetchMovieById }) => {
  const location = useLocation();

  useEffect(() => {
    if (location) {
      const trimeId = location.pathname.replace(/^\/|\/$/g, '');

      fetchMovieById(trimeId);
    }
  }, [fetchMovieById, location]);

  const transformRating = movie && movie.vote_average > 1 ? movie.vote_average / 2 : 1;

  return (
    <div className="movie-card jumbotron mt-4">
      {loading && !movie && <Loader />}
      {!loading && movie && (
        <>
          <div className="d-flex">
            <Link to="/" className="btn btn-outline-primary">
              <span className="d-none d-md-inline">&#8592;</span> Home
            </Link>
          </div>
          <div className="content d-flex flex-column">
            <div className="top-items">
              <img
                alt="cover"
                className="cover"
                src={IMG_PATH + movie.poster_path}
              />

              <div className="m-3">
                <h4>{movie.title}</h4>
              </div>

              <div className="mb-3">{movie.tagline}</div>

              <Rating
                {...{
                  interactive: false,
                  regularRating: transformRating,
                  className: 'justify-content-center mb-3',
                }}
              />
            </div>

            <div className="down-items d-flex justify-content-center">
              <div className="description px-2 px-md-5">
                <div className="column1 mb-3">
                  <span className="tag">
                    <a
                      target="_blank"
                      href={movie.homepage}
                      className="btn btn-dark"
                      rel="noopener noreferrer"
                    >
                      Watch it Online
                    </a>
                  </span>
                </div>

                <hr />

                <div className="column2">
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const actionCreators = { fetchMovieById };

const mapState = (state, props) => ({
  ...props,
  movie: state.moviesReducer.movie,
  loading: state.moviesReducer.loading,
});

export default connect(mapState, actionCreators)(Detail);
