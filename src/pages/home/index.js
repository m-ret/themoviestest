import React, { useEffect, useState } from 'react';

// Utils & Services
import { connect } from 'react-redux';

// Components
import Hero from '../../components/hero';
import Rating from '../../components/rating';
import IsEmpty from '../../components/isEmpty';
import MoviesList from '../../components/movies-list';

// Actions
import { fetchMovies, fetchMoviesByTerm } from '../../actions/moviesActions';

// Styles
import 'react-rater/lib/react-rater.css';

const Home = ({ movies, loading, fetchMovies, fetchMoviesByTerm }) => {
  const [term, setTerm] = useState('');
  const [newRating, setRating] = useState(null);

  const handleCalls = async (fetchFn, query, lessThan) =>
    fetchFn(query, newRating && lessThan);

  useEffect(() => {
    if (newRating) {
      setTerm('');
    }

    if (!term) {
      if (newRating) {
        handleCalls(fetchMovies, newRating > 2 ? newRating - 2 : 0, newRating);
      } else {
        handleCalls(fetchMovies);
      }
    } else {
      handleCalls(fetchMoviesByTerm, term);
    }   
  }, [term, newRating]);

  const regularRating = newRating / 2;

  return (
    <div>
      <Hero value={term} onChange={(e) => setTerm(e.target.value)} />
      {!loading && !movies.length ? (
        <IsEmpty />
      ) : (
        <>
          <Rating
            {...{ setRating, regularRating, label: 'Filter by rating:' }}
          />

          <hr />

          {!term.length && !newRating && (
            <p className="text-left">
              <strong>Popular movies</strong>
            </p>
          )}

          <MoviesList {...{ movies, loading }} />
        </>
      )}
    </div>
  );
};

const actionCreators = { fetchMovies, fetchMoviesByTerm };

const mapState = (state, props) => ({
  ...props,
  movies: state.moviesReducer.movies,
  loading: state.moviesReducer.loading,
});

export default connect(mapState, actionCreators)(Home);
