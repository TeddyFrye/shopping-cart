import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import NavBar from "./components/NavBar.jsx";
import CartSummary from "./components/CartSummary.jsx";

const App = () => {
  const cartItems = [];

  return (
    <Router>
      <CartSummary>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </CartSummary>
    </Router>
  );
};

export default App;
