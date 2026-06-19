import styles from "./ProductGrid.module.scss";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return <h2 className={styles.loading}>Loading Products...</h2>;
  }

  return (
    <section className={styles.container}>
      <h2>All Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default ProductGrid;
