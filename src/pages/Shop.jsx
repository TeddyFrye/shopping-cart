import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";
import "../styles/ProductCard.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data.slice(0, itemsPerPage));
      });
  }, []);

  const fetchMoreData = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      const moreProducts = products.slice(0, itemsPerPage);
      setDisplayedProducts((prevProducts) => [
        ...prevProducts,
        ...moreProducts,
      ]);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - threshold
    ) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="shop-container">
      {displayedProducts.map((product, index) => (
        // Use both product.id and index to create a unique key for each item
        <ProductCard key={`${product.id}_${index}`} product={product} />
      ))}
      {loading && <p>Loading more products...</p>}
    </div>
  );
};

export default Shop;
