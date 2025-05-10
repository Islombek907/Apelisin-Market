import { useEffect, useState } from 'react';
import Banner from './Banner';
import productStore, { selectFetchProducts, selectProducts } from '../../store/productStore.ts';
import { IProduct } from '../../types/types.ts';
import { Link } from 'react-router-dom';

const BestSelling = () => {
  const fetchProducts = productStore(selectFetchProducts);
  const products = productStore(selectProducts);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8; // 8 карточек (2 ряда по 4)

  useEffect(() => {
    fetchProducts(1);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= products.length ? prev : prev + 1));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="container best-selling">
      <h3 className="today">This Month</h3>
      <div className="content">
        <div className="title-section">
          <h3 className="title">Best Selling Products</h3>
          <Link to="/category/groceries" className="view-all">
            View All
          </Link>
          <div className="navigation">
            <button onClick={handlePrev}>
              <img src="/main__left.svg" alt="" />
            </button>
            <button onClick={handleNext}>
              <img src="/main__right.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="products-swiper">
          {visibleProducts.map((product: IProduct) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className="product-card">
                  <span className="heart">
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span className="eye">
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <img src={product.thumbnail} alt={product.title} />
                  <button className="add__cart">Add To Cart</button>
                </div>
                <div className="product__description">
                  <h3>{product.title}</h3>
                  <div className="product-pricing">
                    <span className="new-price">${product.price}</span>
                    {product.discountPercentage > 0 && (
                      <span className="old-price">
                        ${Math.round(product.price / (1 - product.discountPercentage / 100))}
                      </span>
                    )}
                  </div>
                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(Math.round(product.rating))].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <span className="review-count">({Math.round(product.rating * 20)})</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Banner />
    </section>
  );
};

export default BestSelling;