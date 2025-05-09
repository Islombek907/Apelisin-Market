import { Link } from "react-router-dom"

const OurContact = () => {
    return (
        <section className="our__contact">
            <nav className="container">
                <Link className="home" to='/'>Home</Link>
                <span>/</span>
                <span className="contact">Contact</span>
            </nav>
            <div className="container сontact-container">
                <div className="contact__info">
                    <div className="contact-call">
                        <div className="call__us">
                            <img src="/call.svg" alt="" />
                            <h3>Call To Us</h3>
                        </div>
                        <p className="available">We are available 24/7, 7 days a week.</p>
                        <p className="phone">Phone: +8801611112222</p>
                        <hr className="line" />
                    </div>
                    <div className="write__to-us">
                        <div className="write__us">
                            <img src="/email.svg" alt="" />
                            <h3>Write To US</h3>
                        </div>
                        <p className="available">Fill out our form and we will contact you within 24 hours.</p>
                        <a href="sms:customer@exclusive.com">Emails: customer@exclusive.com</a>
                        <a href="sms:support@exclusive.com">Emails: support@exclusive.com</a>
                    </div>
                </div>
                <form className="contact-form">
                    <div className="form-fields">
                        <input required className="your__name" type="text" placeholder="Your Name *" />
                        <input required className="your__email" type="text" placeholder="Your Email *" />
                        <input required className="your__phone" type="text" placeholder="Your Phone *" />
                    </div>
                    <textarea required placeholder="Your Message"></textarea>
                    <button>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default OurContact