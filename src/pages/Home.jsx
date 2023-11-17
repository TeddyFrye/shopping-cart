import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true); // Start the transition

      setTimeout(() => {
        setCurrentProductIndex((prevIndex) =>
          prevIndex === products.length - 1 ? 0 : prevIndex + 1
        ); // Change the product
        setIsTransitioning(false); // End the transition
      }, 500); // Match this with your CSS transition duration
    }, 9000); // This is the interval for each product display

    return () => clearInterval(timer);
  }, [products]);

  return (
    <div className="home">
      <p>Welcome to TARCET</p>
      {/* ... */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        products.length > 0 && (
          <div className="product-carousel">
            <div
              className={`product-card ${
                isTransitioning ? "transitioning" : ""
              }`}
              key={products[currentProductIndex].id}
            >
              <ProductCard product={products[currentProductIndex]} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
