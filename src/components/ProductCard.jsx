import { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "./CartSummary";
import "../styles/ProductCard.css";

const ProductCard = (props) => {
  const { addToCart } = useCart();
  const [isEnlarged, setIsEnlarged] = useState(false);
  const product = props.product;
  const isTransitioning = props.isTransitioning ?? false;

  const toggleImageSize = () => {
    setIsEnlarged(!isEnlarged);
    document.body.classList.toggle("overlay-active");
  };

  const closeEnlargedImage = () => {
    if (isEnlarged) {
      setIsEnlarged(false);
      document.body.classList.remove("overlay-active");
    }
  };

  return (
    <div className={`product-card ${isTransitioning ? "transitioning" : ""}`}>
      <img
        src={product.image}
        alt={product.title}
        className={isEnlarged ? "enlarged" : ""}
        onClick={toggleImageSize}
      />
      {isEnlarged && (
        <div className="overlay" onClick={closeEnlargedImage}></div>
      )}
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }).isRequired,
  isTransitioning: PropTypes.bool,
};

export default ProductCard;
