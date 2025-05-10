import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const categoryMapping = [
  { displayName: "Woman’s Fashion", apiName: "womens-dresses" },
  { displayName: "Men’s Fashion", apiName: "mens-shirts" },
  { displayName: "Electronics", apiName: "smartphones" }, 
  { displayName: "Home & Lifestyle", apiName: "home-decoration" },
  { displayName: "Sunglasses", apiName: "sunglasses" },
  { displayName: "Furniture", apiName: "furniture" },
  { displayName: "Groceries", apiName: "groceries" },
  { displayName: "Fragrances", apiName: "fragrances" },
];

const AllDepartments = () => {
  const [bannerProduct, setBannerProduct] = useState<any>(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=100')
      .then(response => {
        const product = response.data.products[0];
        console.log('Полученный баннерный продукт:', product);
        setBannerProduct(product || null);
      })
      .catch(error => {
        console.error('Ошибка при загрузке баннерного продукта:', error);
        setBannerProduct(null);
      });
  }, []);

  return (
    <div className="all__departments container">
      <aside className="sidebar">
        <ul className="category-list">
          {categoryMapping.map((category, idx) => (
            <li key={idx}>
              <Link to={`/category/${category.apiName}`}>
                {category.displayName}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <section className="main-banner">
        <div className="banner-content">
          <div className="main__left">
            <div className="main__title">
              <img src="/apple.svg" alt="" />
              <h2>{bannerProduct?.title || 'iPhone 14 Series'}</h2>
            </div>
            <h2 className="discount">{bannerProduct?.discountPercentage ? `Up to ${Math.round(bannerProduct.discountPercentage)}% off Voucher` : 'Up to 10% off Voucher'}</h2>
            <Link to={`/product/${bannerProduct?.id || '#'}`} className="shop-now">
              <span className="shop-now-text">Shop Now</span>
              <span className="arrow"></span>
            </Link>
          </div>
          <div className="main__right">
            <img src={bannerProduct?.thumbnail || '/iphone.png'} alt="" className="iphone-image" />
          </div>
        </div>
        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </div>
  );
};

export default AllDepartments;