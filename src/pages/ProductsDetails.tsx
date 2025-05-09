import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import currentStore from '../store/currentStore';

const ProductsDetails = () => {
  const { id } = useParams();
  const { current, fetchCurrent } = currentStore();
  const [quantity, setQuantity] = useState(0); 

  useEffect(() => {
    if (id) {
      fetchCurrent(id);
    }
  }, [id]);

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className="product__details">
      <div className="product-details-container container">
        {current && (
          <>
            <div className="product-slider">
              <img
                src={current.thumbnail}
                alt={`${current.title} image`}
                className="main-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-title">{current.title}</h3>
              <div className="product-rating">
                <span>
                  {'★'.repeat(Math.round(current.rating))}☆{5 - Math.round(current.rating)} (
                  {Math.round(current.rating * 20)} Reviews)
                </span>
                <span>| {current.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
              </div>
              <p className="product-price">${current.price}</p>
              <p className="product-description">{current.description}</p>
              <div className="product-actions">
                <div className="quantity-selector">
                  <button onClick={handleDecrement}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrement}>+</button>
                </div>
                <button className="buy-now">Buy Now</button>
                <button className="wishlist">
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>
              <div className="delivery-info">
                <div className="delivery-option">
                  <i className="fa-solid fa-truck"></i>
                  <span>Free Delivery</span>
                  <br />
                  <span>Enter your postal code for Delivery Availability</span>
                </div>
                <div className="return-option">
                  <i className="fa-solid fa-undo"></i>
                  <span>Return Delivery</span>
                  <br />
                  <span>Free 30 Days Delivery Returns. Details</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductsDetails;