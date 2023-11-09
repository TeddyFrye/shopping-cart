import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err)); // Handle errors
  }, []);
  return (
    <div className="home">
      <h1>Welcome to the Shopping Cart App</h1>
      <p>Find the best products for all your needs.</p>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;
