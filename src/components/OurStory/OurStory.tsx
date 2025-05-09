import { Link } from "react-router-dom"

const OurStory = () => {
  return (
    <section className="about">
      <div className="container">
        <Link to='/'> Home /</Link><span> About</span>
      </div>
      <div className="our__story">
        <div className="our__story-left">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <div className="our__story-right">
          <img src="/womens.png" alt="" />
        </div>
      </div>
      <div className="container stats-cards">
        <div className="card">
          <i className="fa-solid fa-house icons"></i>
          <span className="stats-value">10.5k </span>
          <span className="stats-label">Sallers active our site</span>
        </div>
        <div className="card">
          <i className="fa-solid fa-dollar-sign icons"></i>
          <span className="stats-value">10.5k </span>
          <span className="stats-label">Sallers active our site</span>
        </div>
        <div className="card">
          <i className="fa-solid fa-shop icons"></i>
          <span className="stats-value">10.5k </span>
          <span className="stats-label">Sallers active our site</span>
        </div>
        <div className="card">
          <i className="fa-solid fa-sack-dollar icons"></i>
          <span className="stats-value">10.5k </span>
          <span className="stats-label">Sallers active our site</span>
        </div>
      </div>
      <div className="container team-container">
        <div className="team-card">
          <div className="team-image">
            <img src="/tomcruise.png" alt="" />
          </div>
          <h2>Tom Cruise</h2>
          <span>Founder & Chairman</span>
          <div className="team-social">
            <a href="#"><img src="/black__twitter.svg" alt="" /></a>
            <a href="#"><img src="/black__instagram.svg" alt="" /></a>
            <a href="#"><img src="/black__linkedn.svg" alt="" /></a>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="/emma__watson.png" alt="" />
          </div>
          <h2>Emma Watson</h2>
          <span>Managing Director</span>
          <div className="team-social">
            <a href="#"><img src="/black__twitter.svg" alt="" /></a>
            <a href="#"><img src="/black__instagram.svg" alt="" /></a>
            <a href="#"><img src="/black__linkedn.svg" alt="" /></a>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="/will__smith.png" alt="" />
          </div>
          <h2>Will Smith</h2>
          <span>Product Designer</span>
          <div className="team-social">
            <a href="#"><img src="/black__twitter.svg" alt="" /></a>
            <a href="#"><img src="/black__instagram.svg" alt="" /></a>
            <a href="#"><img src="/black__linkedn.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory