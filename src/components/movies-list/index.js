import React from 'react';

// Components
import Loader from '../loader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

// Constants
import { IMG_PATH } from '../../constants';

const MoviesList = ({ movies, loading }) => {
  return (
    <Row noGutters>
      {loading && !movies.length && <Loader />}
      {movies.map((s, i) => (
        <Col key={s.id + i} xs={6} md={2} className="p-2">
          <Link to={`/${s.id}`}>
            <Image
              fluid
              src={IMG_PATH + s.poster_path}
              className="shadow-lg h-100 w-100"
            />
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default MoviesList;
