import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";
import "../styles/ProductCard.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data.slice(0, itemsPerPage));
      });
  }, []);

  const handleScroll = (e) => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      setPage((prevPage) => prevPage + 1);
      const newItems = products.slice(0, page * itemsPerPage);
      setDisplayedProducts(newItems);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, products]);

  return (
    <div className="shop-container">
      {displayedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
