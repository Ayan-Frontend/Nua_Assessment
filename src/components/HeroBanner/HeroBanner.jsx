import styles from "./HeroBanner.module.scss";

const HeroBanner = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.tag}>New Collection 2026</span>

        <h1>Discover Premium Products For Every Lifestyle</h1>

        <p>
          Explore quality products carefully selected to deliver style, comfort,
          and value.
        </p>

        <button onClick={scrollToProducts}>Shop Now</button>
      </div>

      <div className={styles.imageWrapper}>
        <img src="/assets/shopping_banner.jpg" alt="Shopping" />
      </div>
    </section>
  );
};

export default HeroBanner;
