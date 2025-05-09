import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';
import { IProduct } from '../../types/types.ts';

const FlashSales = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=10')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Ошибка при загрузке продуктов:', error));

    const targetTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 дня от текущего момента
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance <= 0) {
        setTimeout(() => {
          setTimeLeft({ days: 3, hours: 23, minutes: 19, seconds: 56 }); // Перезапуск через 10 минут
        }, 10 * 60 * 1000);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container sales">
      <h2 className="today">Today’s</h2>
      <div className="flash__sales">
        <div>
          <h2 className="title">Flash Sales</h2>
          <div className="countdown__timer">
            <div className="timer">
              <div className="timer__block">
                <span className="timer__label">Days</span>
                <span className="timer__value">{String(timeLeft.days).padStart(2, '0')}</span>
              </div>
              <span className="timer__separator">:</span>
              <div className="timer__block">
                <span className="timer__label">Hours</span>
                <span className="timer__value">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="timer__separator">:</span>
              <div className="timer__block">
                <span className="timer__label">Minutes</span>
                <span className="timer__value">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="timer__separator">:</span>
              <div className="timer__block">
                <span className="timer__label">Seconds</span>
                <span className="timer__value">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-swiper">
        {products.map((product: IProduct) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashSales;