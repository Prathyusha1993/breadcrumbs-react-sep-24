import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsListing = () => {
    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
    .then((res => res.json()))
    .then(res => {
        setProduct(res)
    })
    }, []);

    console.log(id);

  return (
    <div>
        <h2>ProductsListing</h2>
        {product ? 
        (
            <div>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <h3>{product.price}</h3>
            </div>
        ) : 
        (
            <p>Loading...</p>
        )}
    </div>
  )
}

export default ProductsListing