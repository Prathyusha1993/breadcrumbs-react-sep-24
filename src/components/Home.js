import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [productData, setProductData] = useState([]);

    const getProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setProductData(data.products.slice(0, 6));
    };
  
    useEffect(() => {
      getProducts();
    }, []);
  return (
    <div>
        <h2>Home Page</h2>
        <span>Trending Products</span>
        <div>
            {productData.map((product) => {
                return (
                    <div className='product-card' key={product.id}>
                        <Link to={`/products/${product.id}`}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
        <div>
            <Link to='/products'>
            <button>View All Products</button>
            </Link>
        </div>
    </div>
  )
}

export default Home;