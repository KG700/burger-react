import React from 'react';

import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <Ingredient key={ingredientKey + i} type={ingredientKey} />;
      });
    });

  return (
    <div className={classes.Burger}>
      <Ingredient
        type='bread-top'
      />

      {transformedIngredients}
      
      <Ingredient
        type='bread-bottom'
      />
    </div>
  );
};

export default burger;
