const Footer = () => {
  return (
    <div className="position">
    <a href="#up"><img className="arrow" src="/arrow__top.svg" alt="" /></a>
        <footer className="footer">
            <ul className="footer__list exclusive">
                <li><h5 className="footer__title">Exclusive</h5></li>
                <li><a className="subscribe" href="#">Subscribe</a></li>
                <li><a className="discount" href="#">Get 10% off your first order</a></li>
                <li>
                    <form className="email-button">
                        <input type="email" className="email-input" placeholder="Enter your email" required />
                        <button><img src="/send.svg" alt="" /></button>
                    </form>
                </li>
            </ul>
            <ul className="footer__list support">
                <li><h5 className="title__support extra-suport">Support</h5></li>
                <li><a className="footer__info" href="#">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
                <li><a className="footer__info" href="sms:exclusive@gmail.com">exclusive@gmail.com</a></li>
                <li>
                    <a className="footer__info" href="tel:+88015-88888-9999">+88015-88888-9999</a>
                </li>
            </ul>
            <ul className="footer__list account">
                <li><h5 className="title__support">Account</h5></li>
                <li><a className="footer__info" href="#">My Account</a></li>
                <li><a className="footer__info" href="sms:exclusive@gmail.com">Login / Register</a></li>
                <li>
                    <a className="footer__info" href="#">Cart</a>
                </li>
                <li>
                    <a className="footer__info" href="#">Wishlist</a>
                </li>
                <li>
                    <a className="footer__info" href="#">Shop</a>
                </li>
            </ul>
            <ul className="footer__list link">
                <li><h5 className="title__support">Quick Link</h5></li>
                <li><a className="footer__info" href="#">Privacy Policy</a></li>
                <li><a className="footer__info" href="#">Terms Of Use</a></li>
                <li>
                    <a className="footer__info" href="#">FAQ</a>
                </li>
                <li>
                    <a className="footer__info" href="#">Contact</a>
                </li>
            </ul>
            <div className="donwload__app">
                <h5 className="title__support extra">Download App</h5>
                <span className="diccount-mini">Save $3 with App New User Only</span>
                <div className="app">
                    <div className="download__left">
                        <img src="/qr.svg" alt="" />
                    </div>
                    <div className="download__right">
                        <img src="/google__play.svg" alt="" />
                        <img src="/app__store.svg" alt="" />
                    </div>
                </div>
                <ul className="links">
                <li><a href="#"><img src="/facebook.svg" alt="" /></a></li>
                <li><a href="#"><img src="/twitter.svg" alt="" /></a></li>
                <li><a href="#"><img src="/instagram.svg" alt="" /></a></li>
                <li><a href="#"><img src="/in.svg" alt="" /></a></li>
            </ul>
            </div>
    </footer>
    </div>
  )
}

export default Footer