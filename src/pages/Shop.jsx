import { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Placeholder for fetching products logic
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop">
      <h1>Shop Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            {/* Add to Cart functionality will go here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
