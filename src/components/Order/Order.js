import React from 'react';

import classes from './Order.module.css';

const Order = (props) => {

  console.log(props)

  const ingredients = [];
  for (let ingredient in props.ingredients) {
    ingredients.push(
      {
        name: ingredient,
        amount: props.ingredients[ingredient]
      }
    );
  }

  const ingredientOutput = ingredients.map(ingredient => {
    return <span>{ingredient.name} ({ingredient.amount})</span>;
  });

  return (
  <div className={classes.Order}>
    <p>Ingredients: {ingredientOutput}</p>
    <p>Price: <strong>£ {props.price.toFixed(2)}</strong></p>
  </div>
  )
};

export default Order;
