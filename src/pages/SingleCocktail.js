import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log('data', data);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h3>No drink to display</h3>;
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img src={image} alt={name} />
        <div>
          <p>Name: {name}</p>
          <p>Category: {category}</p>
          <p>Info: {info}</p>
          <p>Glass: {glass}</p>
          <p>Instructions: {instructions}</p>
          <p>
            Ingredients:
            {ingredients.map((ing, index) => {
              return ing ? <p key={index}>{ing},</p> : null;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
