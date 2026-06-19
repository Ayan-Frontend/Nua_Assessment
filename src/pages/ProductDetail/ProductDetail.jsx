import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductById } from "../../services/productApi";
import { productVariants } from "../../data/variants";
import styles from "./ProductDetail.module.scss";
import { useCart } from "../../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(
    searchParams.get("color") || "Black",
  );

  const { dispatch } = useCart();

  const [selectedSize, setSelectedSize] = useState(
    searchParams.get("size") || "S",
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
      setSelectedImage(data.image);
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    setSearchParams({
      color: selectedColor,
      size: selectedSize,
    });
  }, [selectedColor, selectedSize, setSearchParams]);

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Loading Product...
      </h2>
    );
  }

  const variants = productVariants.default;

  const currentVariant = variants.find(
    (variant) =>
      variant.color === selectedColor && variant.size === selectedSize,
  );

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        cartId: crypto.randomUUID(),
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        color: selectedColor,
        size: selectedSize,
        quantity,
      },
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.gallery}>
        <img
          src={selectedImage}
          alt={product.title}
          className={styles.mainImage}
        />

        <div className={styles.thumbnails}>
          {[1, 2, 3].map((item) => (
            <img
              key={item}
              src={product.image}
              alt=""
              onClick={() => setSelectedImage(product.image)}
            />
          ))}
        </div>
      </div>

      <div className={styles.info}>
        <h1>{product.title}</h1>

        <h2>${product.price}</h2>

        <p>{product.description}</p>

        <div>
          <h4>Color</h4>

          <div className={styles.colors}>
            {["Black", "White"].map((color) => (
              <button key={color} onClick={() => setSelectedColor(color)}>
                {color}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4>Size</h4>

          <div className={styles.sizes}>
            {["S", "M", "L"].map((size) => {
              const variant = variants.find(
                (v) => v.color === selectedColor && v.size === size,
              );

              const stock = variant?.stock || 0;

              return (
                <button
                  key={size}
                  disabled={stock === 0}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}

                  {stock === 0 && " Sold Out"}

                  {stock > 0 && stock <= 3 && " Low Stock"}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.quantity}>
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
            -
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>

        <button
          className={styles.addBtn}
          disabled={!currentVariant || currentVariant.stock === 0}
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
