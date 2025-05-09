import { IProduct } from '../../types/types.ts';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
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
  );
};

export default ProductCard;