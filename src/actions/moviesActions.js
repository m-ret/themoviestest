import { API_KEY } from '../constants';
import ApiClient from '../services/apiClient';

export const START_FETCHING_MOVIES = 'START_FETCHING_MOVIES';
export const FAILED_FETCHING_MOVIES = 'FAILED_FETCHING_MOVIES';
export const SUCCESS_FETCHING_MOVIES = 'SUCCESS_FETCHING_MOVIES';

const startFetchingMovies = () => ({ type: START_FETCHING_MOVIES });
const moviesFailed = (error) => ({ type: FAILED_FETCHING_MOVIES, error });
const loadMovies = (movies) => ({ type: SUCCESS_FETCHING_MOVIES, movies });

const fetchAllMovies = (url) => {
  return async (dispatch) => {
    dispatch(startFetchingMovies());

    try {
      const data = await ApiClient.get(url);

      dispatch(loadMovies(data.data.results));
    } catch (error) {
      dispatch(moviesFailed(error));
    }
  };
};

export const fetchMovies = (voteCount, between) => {
  const url = `/discover/movie?${API_KEY}`;
  const byPopularity = `${url}&sort_by=popularity.desc`;
  const byRating = `${url}&vote_average.gte=${voteCount}&vote_average.lte=${between}`;

  const urlConstructor = voteCount >= 0 && between ? byRating : byPopularity;

  return fetchAllMovies(urlConstructor);
};

export const fetchMoviesByTerm = (query) => {
  return fetchAllMovies(`/search/movie?${API_KEY}&query=${query}`);
};

export const START_FETCHING_MOVIE = 'START_FETCHING_MOVIE';
export const FAILED_FETCHING_MOVIE = 'FAILED_FETCHING_MOVIE';
export const SUCCESS_FETCHING_MOVIE = 'SUCCESS_FETCHING_MOVIE';

const startFetchingMovie = () => ({ type: START_FETCHING_MOVIE });
const loadMovie = (movie) => ({ type: SUCCESS_FETCHING_MOVIE, movie });
const movieFailed = (error) => ({ type: FAILED_FETCHING_MOVIE, error });

export const fetchMovieById = (id) => {
  const url = `/movie/${id}?${API_KEY}`;
  return async (dispatch) => {
    dispatch(startFetchingMovie());

    try {
      const data = await ApiClient.get(url);

      dispatch(loadMovie(data.data));
    } catch (error) {
      dispatch(movieFailed(error));
    }
  };
};
