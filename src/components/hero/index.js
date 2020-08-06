import React from 'react';

// Components
import Jumbotron from 'react-bootstrap/Jumbotron';

const Hero = ({ onChange, value }) => {
  return (
    <Jumbotron className="mt-3">
      <h3>
        <strong>Your favourite movies. Explained.</strong>
      </h3>
      <br />
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder="Search for a movie..."
      />
    </Jumbotron>
  );
};

export default Hero;
