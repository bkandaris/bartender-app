import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
