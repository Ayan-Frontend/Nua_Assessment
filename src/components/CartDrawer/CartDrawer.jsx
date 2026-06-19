import styles from "./CartDrawer.module.scss";
import { useCart } from "../../context/CartContext";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, dispatch } = useCart();

  console.log("cart: ", cart);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <aside className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <h2>Cart</h2>

        <IoClose
          onClick={onClose}
          size={26}
          style={{ fontWeight: "800", cursor: "pointer" }}
        />
      </div>

      {/* className={styles.contentContainer} */}
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Cart is Empty</p> <br />
          <p>Add products to proceed.</p>
        </div>
      ) : (
        <div className={styles.items}>
          {cart.map((item) => (
            <div key={item.cartId} className={styles.item}>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>

              <div className={styles.itemContent}>
                <Link to={`/product/${item.id}`}>
                  <h4>{item.title}</h4>
                </Link>
                <p>
                  {item.color} / {item.size}
                </p>
                <p>${item.price.toFixed(2)}</p>
                <div className={styles.itemActionContainer}>
                  <div className={styles.quantityContainer}>
                    <button
                      disabled={item.quantity <= 1 && true}
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QTY",
                          payload: {
                            id: item.cartId,
                            quantity: item.quantity - 1,
                          },
                        })
                      }
                      className={styles.itemActionBtn}
                    >
                      -
                    </button>
                    <span>{item.quantity <= 0 ? 1 : item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QTY",
                          payload: {
                            id: item.cartId,
                            quantity: item.quantity + 1,
                          },
                        })
                      }
                      className={styles.itemActionBtn}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: item.cartId,
                      })
                    }
                    className={styles.itemRemoveBtn}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={styles.summary}>
        <h3>Total: ${subtotal.toFixed(2)}</h3>
        <button>Checkout</button>
      </div>
    </aside>
  );
};

export default CartDrawer;
