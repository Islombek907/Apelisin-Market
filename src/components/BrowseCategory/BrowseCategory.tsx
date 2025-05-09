import { Link } from "react-router-dom";
import { useEffect } from "react";
import categoryStore from "../../store/categoryStore";

const BrowseCategory = () => {
  const { fetchCategories } = categoryStore();

  useEffect(() => {
    fetchCategories();
  }, []);


  return (
    <section className="container browse__category">
      <h3 className="today">Categories</h3>
      <div className="category__title">
        <div className="browse__navigation">
          <h3 className="title browse__title">Browse By Category</h3>
        </div>
        <nav className="menu">
          <div className="menu-item">
            <Link to="/category/smartphones">
              <i className="fa-solid fa-mobile-screen-button phone"></i>
              <span>Phones</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/category/laptops">
              <i className="fa-solid fa-computer computers"></i>
              <span>Computers</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/category/smartwatches">
              <i className="fa-solid fa-clock smartwatch"></i>
              <span>Smartwatch</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/category/cameras">
              <i className="fa-solid fa-camera camera"></i>
              <span>Camera</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/category/headphones">
              <i className="fa-solid fa-headphones headphone"></i>
              <span>Headphones</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/category/video-games">
              <i className="fa-solid fa-gamepad gaming"></i>
              <span>Gaming</span>
            </Link>
          </div>
        </nav>
      </div>
      <hr className="line" />
    </section>
  );
};

export default BrowseCategory;