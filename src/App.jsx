import "./styles/globals.scss";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";
import { useEffect, useState } from "react";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import { useLocation } from "react-router-dom";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsCartOpen(false);
  }, [location]);

  return (
    <>
      <Navbar onCartOpen={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AppRouter />
    </>
  );
}

export default App;
