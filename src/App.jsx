import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import NavBar from "./components/NavBar";
import CartSummary from "./components/CartSummary";

const App = () => {
  const cartItems = [];

  return (
    <Router>
      <div className="App">
        <NavBar />
        <CartSummary items={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
