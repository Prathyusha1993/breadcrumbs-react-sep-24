import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const ProductsDetails = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    };
  
    useEffect(() => {
      getProducts();
    }, []);

  return (
    <div>
        <h2>Home Page</h2>
        <span> Products</span>
        <div>
            {products?.map((product) => {
                return (
                    <div className='product-card' key={product.id}>
                        <Link to={`/products/${product.id}`}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                        <h3>{product.price}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductsDetails;