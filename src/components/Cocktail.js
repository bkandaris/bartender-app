import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <div className='cocktail-wrapper'>
      <div className='individual-cocktail'>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>
          <button className='cocktail-button'>More info</button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
