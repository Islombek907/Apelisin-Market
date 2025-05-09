import { useEffect, useState } from 'react';
import productStore, { selectFetchProducts, selectProducts } from '../../store/productStore.ts';
import { IProduct } from '../../types/types.ts';
import { Link } from 'react-router-dom';

const OurProducts = () => {
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
        <section className="container our__products">
            <h3 className="today">Our Products</h3>
           <div className="products__title__and__navigation">
           <h3 className="title product-title">Explore Our Products</h3>
            <div className="navigation">
                <button className="swiper-button-prev" onClick={handlePrev}>
                    <img src="/main__left.svg" alt="" />
                </button>
                <button className="swiper-button-next" onClick={handleNext}>
                    <img src="/main__right.svg" alt="" />
                </button>
            </div>
           </div>
            <div className="shop-items">
                <div className="products-swiper">
                    {visibleProducts.map((product: IProduct) => (
                        <div key={product.id} className={product.id % 2 === 0 ? 'last__product' : ''}>
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
        </section>
    );
};

export default OurProducts;