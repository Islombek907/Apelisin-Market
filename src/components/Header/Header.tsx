import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return (
      <div>
        <div className="top">
        <div className="top-banner">
          <div className="left-space"></div>
          <div className="main-banner">
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href="#">ShopNow</a>
          </div>
          <span>English</span> 
        </div>
      </div>
      <header className="header" id="up">
          <div className="container">
          <Link className="logo" to='/'>Apelsin Market</Link>
            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </nav>
            <div className="search-and-icons">
                <div className="search">
                    <input type="text" placeholder="What are you looking for?" />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="icons">
                    <a href="#"><i className="fa-solid fa-heart"></i></a>
                    <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
          </div>
      </header>
      </div>
    );
  };
  
  export default Header;
  