import { useEffect, useState } from 'react';
import bannerStore from '../../store/bannerStore.ts';
import { IProduct } from '../../types/types.ts';

const Banner = () => {
  const { bannerProducts, fetchBannerProducts } = bannerStore();
  const [timeLeft, setTimeLeft] = useState({ days: 23, hours: 5, minutes: 59, seconds: 35 });
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    fetchBannerProducts();

    const targetTime = new Date().getTime() + 23 * 24 * 60 * 60 * 1000; // 23 дня от текущего момента
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance <= 0) {
        setTimeout(() => {
          setTimeLeft({ days: 23, hours: 5, minutes: 59, seconds: 35 }); // Перезапуск через 10 минут
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

  useEffect(() => {
    if (bannerProducts.length > 0) {
      setCurrentProduct(bannerProducts[Math.floor(Math.random() * bannerProducts.length)]);
    }
  }, [bannerProducts]);

  return (
    <section className="banner">
      <div className="banner-left">
        <span className="category">Categories</span>
        <h3 className="title">Improve your phone</h3>
        <div className="timer">
          <div className="timer-details">
            <div>
              <span className="timer-item">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="timer-label">Days</span>
            </div>
            <div>
              <span className="timer-item">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="timer-label">Hours</span>
            </div>
            <div>
              <span className="timer-item">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="timer-label">Minutes</span>
            </div>
            <div>
              <span className="timer-item">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="timer-label">Seconds</span>
            </div>
          </div>
          <button className="buy-btn">Buy Now!</button>
        </div>
      </div>
      <div className="banner-right">
        {currentProduct && (
          <img src={currentProduct.thumbnail} alt={currentProduct.title} className="product-image" />
        )}
      </div>
    </section>
  );
};

export default Banner;