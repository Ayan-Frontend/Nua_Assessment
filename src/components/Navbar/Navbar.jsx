import { FaShoppingBag } from "react-icons/fa";
import styles from "./Navbar.module.scss";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = ({ onCartOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cart } = useCart();

  // console.log(location);
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleback = () => {
    navigate("/");
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div
          className={styles.logo}
          onClick={location.pathname !== "/" ? handleback : handleRefresh}
        >
          {location.pathname !== "/" ? (
            <span className={styles.homeNavigate}>
              <FaArrowCircleLeft style={{ marginRight: "7px" }} /> Home
            </span>
          ) : (
            <span>NuaStore</span>
          )}
        </div>

        <button className={styles.cartBtn} onClick={onCartOpen}>
          <FaShoppingBag />

          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </button>
      </div>
    </header>
  );
};
export default Navbar;
