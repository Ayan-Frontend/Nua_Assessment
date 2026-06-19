import { useEffect, useState } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { getProducts } from "../../services/productApi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        console.log("data: ", data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <HeroBanner />

      <section id="products">
        <ProductGrid products={products} loading={loading} />
      </section>
    </>
  );
};

export default Home;
