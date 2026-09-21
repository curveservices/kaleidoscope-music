import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <img src={logo} alt="Kaleidoscope music groups, Rochester Kent" />
          <p>Make Music, Find Your People</p>
        </div>
        <div className="footer__column">
          <h3>Explore</h3>
          <nav className="footer__nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact-us">Contact</Link>
          </nav>
        </div>

        <div className="footer__column">
          <h3>Get In Touch</h3>
          <div className="footer__contact">
            <p>Rochester, Kent</p>
            <a href="tel:+44 1795 522 738">01795 522 738</a>
            <a href="mailto: music@fmerrifield.co.uk">music@merrifield.co.uk</a>
          </div>
        </div>

        <div className="footer__column">
          <h3>Follow Us</h3>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/KaleidoscopeCreativeArts/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaleidoscope music groups Facebook."
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/hdproductionsltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaleidoscope music groups Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className="footer__social-text">
            Follow us for upcoming performances, photos and news.
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.immutable-studio.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Immutable Studio
            </a>
            . All rights reserved.
          </p>

          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>

            <span>◆</span>

            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
