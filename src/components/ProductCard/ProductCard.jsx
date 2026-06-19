import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const handleQuickAdd = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        cartId: crypto.randomUUID(),
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        color: "Black",
        size: "M",
        quantity: 1,
      },
    });
  };

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>

      <p className={styles.price}>${product.price}</p>
      <button onClick={handleQuickAdd}>Quick Add</button>
    </div>
  );
};

export default ProductCard;
