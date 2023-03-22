import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>{product.price} rsd</div>
      <div>
        <button onClick={() => onAdd(product)}>Dodaj u korpu</button>
      </div>
    </div>
  )
}