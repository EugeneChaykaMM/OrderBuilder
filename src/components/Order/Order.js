import React from 'react'
import classes from './Order.module.sass'

const Order = (props) => {
  const ingredientsArr = []
  for (let ingredientName in props.ingredients) {
    ingredientsArr.push(
      {
        name: ingredientName,
        amount: props.ingredients[ingredientName]
      }
    )
  }

  const ingredientOutput = ingredientsArr.map(ig => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    )
  })

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default Order
