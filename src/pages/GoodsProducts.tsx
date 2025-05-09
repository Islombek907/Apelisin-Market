import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { IProduct } from '../types/types.ts';
import { Link } from 'react-router-dom';

const GoodsProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${categoryName}?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`);
        setProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      } catch (error) {
        console.error('Ошибка при загрузке продуктов:', error);
        setProducts([]);
      }
      setLoading(false);
    };
    if (categoryName) {
      loadProducts();
    }
  }, [currentPage, categoryName]);

  const changePage = (dir: string) => {
    setCurrentPage((prev) => {
      if (dir === 'prev' && prev > 1) return prev - 1;
      if (dir === 'next' && prev < totalPages) return prev + 1;
      return prev;
    });
  };

  const formatCategoryName = (name?: string) => {
    if (!name || name === 'all') return 'All Products';
    return name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <>
      <section className="container goods">
        <h1>{formatCategoryName(categoryName)} ({products.length})</h1>
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <div className="goods-grid">
            {products.map((product: IProduct) => (
              <div key={product.id} className="goods-product-card-wrapper">
                <Link to={`/product/${product.id}`}>
                  <div className="product-card">
                    {product.discountPercentage > 0 && (
                      <span className="discount">-{Math.round(product.discountPercentage)}%</span>
                    )}
                    <span className="heart">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                    <span className="eye">
                      <i className="fa-solid fa-eye"></i>
                    </span>
                    <img src={product.thumbnail} alt="" />
                    <button className="add__cart">Add To Cart</button>
                  </div>
                  <div className="product__description products">
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
        )}
        <div className="main__products-pagination">
          <button
            onClick={() => changePage('prev')}
            disabled={currentPage === 1}
            className="more-btn"
          >
            НАЗАД
          </button>
          <output>
            Страница {currentPage} - {totalPages}
          </output>
          <button
            onClick={() => changePage('next')}
            className="more-btn"
            disabled={currentPage === totalPages}
          >
            ВПЕРЁД
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GoodsProducts;