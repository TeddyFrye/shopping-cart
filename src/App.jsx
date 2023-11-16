import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import NavBar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { CartProvider } from "./components/CartSummary.jsx";
import "./styles/App.css";
import { useState } from "react";

const App = () => {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar toggleCart={toggleCart} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
          <Sidebar isExpanded={isCartVisible} toggleCart={toggleCart} />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
