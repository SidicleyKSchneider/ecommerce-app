import React from 'react'
import Rating from './Rating';

export default function Product({product}) {

  const onMouseOver = (product) => {
      document.getElementById(`${product._id}`).src = `${product.alternativeImage}`;
    //   console.log(`${product._id}`) 
      console.log(`${product.countInStock}`) 
  }
  const onMouseLeave = () => {
      document.getElementById(`${product._id}`).src = `${product.image}`;
  }
    return (
        <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
                <img
                    className="medium"
                    id={product._id}
                    src={product.image}
                    alt={product.name}
                    onMouseOver={() => onMouseOver(product)}
                    onMouseLeave={() => onMouseLeave(product)}
                />
            </a>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                ></Rating>
                <div className="price">${product.price}</div>
            </div>
        </div>
      
    )
}