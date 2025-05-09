import { useEffect, useState } from 'react';
import OurServices from '../OurServices';
import { IProduct } from '../../types/types.ts';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewArrival = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ['electronics', 'womens-dresses', 'electronics', 'fragrances'];
        const fetchedProducts: IProduct[] = [];
        for (const category of categories) {
          const response = await axios.get(`https://dummyjson.com/products/category/${category}?limit=1&skip=${fetchedProducts.length}`);
          if (response.data.products && response.data.products.length > 0) {
            fetchedProducts.push(response.data.products[0]);
          }
        }
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Ошибка при загрузке продуктов:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section className="container new__arrival">
        <span className="today">Featured</span>
        <h4 className="title new__title">New Arrival</h4>
        <div className="new-arrival">
          <div className="arrival-card">
            <img src={products[0]?.thumbnail} alt={products[0]?.title || 'Product'} className="card-image" />
            <div className="card-content">
              <h4 className="card-title">{products[0]?.title || 'Product'}</h4>
              <p className="card-description">{products[0]?.description || 'Description unavailable'}</p>
              <Link to={`/category/${products[0]?.category || '#'}`}><button className="shop__now">Shop Now</button></Link>
            </div>
          </div>
          <div className="arrival__right">
            <div className="arrival-top">
              <img src={products[1]?.thumbnail} alt={products[1]?.title || ''} />
              <div className="top__desc">
                <h4 className="card-title">{products[1]?.title || 'Product'}</h4>
                <p className="card-description">{products[1]?.description || 'Description unavailable'}</p>
                <Link to={`/category/${products[1]?.category || '#'}`}><button className="shop__now">Shop Now</button></Link>
              </div>
            </div>
            <div className="arrival__mini">
              <div className="arrival__mini-left">
                <img src={products[2]?.thumbnail} alt={products[2]?.title || ''} />
                <div className="top__desc">
                  <h4 className="card-title">{products[2]?.title || 'Product'}</h4>
                  <p className="card-description">{products[2]?.description || 'Description unavailable'}</p>
                  <Link to={`/category/${products[2]?.category || '#'}`}><button className="shop__now">Shop Now</button></Link>
                </div>
              </div>
              <div className="arrival__mini-right">
                <img src={products[3]?.thumbnail} alt={products[3]?.title || ''} />
                <div className="top__desc">
                  <h4 className="card-title">{products[3]?.title || 'Product'}</h4>
                  <p className="card-description">{products[3]?.description || 'Description unavailable'}</p>
                  <Link to={`/category/${products[3]?.category || '#'}`}><button className="shop__now">Shop Now</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurServices />
    </>
  );
};

export default NewArrival;