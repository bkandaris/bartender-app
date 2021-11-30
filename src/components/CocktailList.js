import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h3>No cocktails found</h3>;
  }

  return (
    <div className='cocktail-list'>
      {cocktails.map((drink) => {
        return (
          <Cocktail
            key={drink.id}
            id={drink.id}
            name={drink.name}
            image={drink.image}
            glass={drink.glass}
            info={drink.info}
          />
        );
      })}
    </div>
  );
};

export default CocktailList;
