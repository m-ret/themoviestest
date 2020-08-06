import {
  START_FETCHING_MOVIE,
  FAILED_FETCHING_MOVIE,
  START_FETCHING_MOVIES,
  SUCCESS_FETCHING_MOVIE,
  FAILED_FETCHING_MOVIES,
  SUCCESS_FETCHING_MOVIES,
} from '../actions/moviesActions';

const initialState = {
  movies: [],
  error: null,
  loading: false,
  movie: undefined,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch movies suggestions and search by term
    case START_FETCHING_MOVIES:
      return {
        ...state,
        error: null,
        loading: true,
        movie: undefined,
      };
    case SUCCESS_FETCHING_MOVIES:
      return {
        ...state,
        error: null,
        loading: false,
        movies: action.movies,
      };
    case FAILED_FETCHING_MOVIES:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // Fetch movie by id
    case START_FETCHING_MOVIE:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SUCCESS_FETCHING_MOVIE:
      return {
        ...state,
        error: null,
        loading: false,
        movie: action.movie,
      };
    case FAILED_FETCHING_MOVIE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default moviesReducer;
