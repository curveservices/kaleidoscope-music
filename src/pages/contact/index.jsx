import SmallHero from "../../components/heroSmall";
import TextImage from "../../components/textImage";
import hero from "../../assets/images/sax1.jpeg";
import groups from "../../assets/images/julie.JPEG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import useScrollState from "../../components/scrollState";
import "./index.scss";

const Contact = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  return (
    <div className="contact-page">
      <SmallHero
        src={hero}
        h1="Contact Us."
        h1a="Get"
        h1b="In"
        h1c="Touch."
        p="We'd love to hear from you. Whether you have a question, want to find out more about Kaleidoscope, or are ready to join, we're here to help."
        p1="If you're returning to an instrument after years away or looking for a new challenge, there's a place for you at Kaleidoscope."
        button1Text="Join Us"
        button1Link="#join-us"
        button2Text="Find your group"
        button2Link="/groups"
      />

      <FadeInSection>
        <section className="contact">
          <div className="contact__diamond contact__diamond--pink" />
          <div className="contact__diamond contact__diamond--teal" />
          <div className="contact__diamond contact__diamond--yellow" />
          <div className="contact__diamond contact__diamond--violet" />
          <div className="contact__diamond contact__diamond--blue" />
          <div className="contact__info">
            <div className="header">
              <div className="eyebrow">get In touch</div>
              <h2>
                How To
                <span>Reach Us</span>
              </h2>
            </div>
            <div className="contact__details-container">
              <div className="contact__detail">
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="email">
                  <h3>Email us</h3>
                  <Link
                    className=""
                    to="mailto: brian@quercusgraphics.co.uk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    brian@quercusgraphics.co.uk
                  </Link>
                </div>
              </div>
              <div className="contact__detail">
                <FontAwesomeIcon icon={faPhone} />
                <div className="phone">
                  <h3>Call us</h3>
                  <h4>For All Wind Groups</h4>
                  <Link
                    className=""
                    to="tel:+44 7702 056378"
                    target="_blank"
                    rel="noreferrer"
                  >
                    07702 056378
                  </Link>
                  <hr />
                  <h4>For String Ensemble & Orchestra.</h4>
                  <Link
                    className=""
                    to="tel:+44 7910 632679"
                    target="_blank"
                    rel="noreferrer"
                  >
                    07910 632679
                  </Link>
                </div>
              </div>
              <div className="contact__detail">
                <FontAwesomeIcon icon={faLocationArrow} />
                <div className="address">
                  <h3>Find us</h3>
                  <Link
                    className=""
                    to="https://www.google.com/maps/place/The+Rochester+Grammar+School/@51.3713541,0.5005432,17z/data=!3m1!4b1!4m6!3m5!1s0x47d8cce9402aef3d:0x378a3529bd3a34f7!8m2!3d51.3713541!4d0.5005432!16s%2Fm%2F027fq0x?entry=ttu&g_ep=EgoyMDI2MTEwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Rochester Grammar School, Maidstone Road, Rochester,
                    Kent, ME1 3BY
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__form-section" id="join-us">
            <div className="header">
              <div className="eyebrow">Contact us</div>
              <h2>
                We'll get back
                <span>to you soon</span>
              </h2>
            </div>
            <form className="contact__form">
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name">Your Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="phone">Telephone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="instrument">Instrument</label>
                  <input
                    id="instrument"
                    type="text"
                    name="instrument"
                    placeholder="Your instrument"
                    required
                  />
                </div>
              </div>
              <div className="textarea">
                <div className="contact__form-group">
                  <label htmlFor="message">Tell us about yourself</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a little about yourself, the instrument you play and what you are looking for."
                    required
                  />
                </div>
                <div className="contact__form-submit">
                  <Button
                    text="Send"
                    background="var(--pink)"
                    color="var(--ivory)"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <TextImage
          src={groups}
          eyebrow="JOIN OUR MUSICAL COMMUNITY"
          h2="Everyone"
          headingAccent="is welcome!"
          color="var(--teal)"
          p1="Kaleidoscope is a friendly and inclusive collective of music groups, open to all musicians, whatever your level."
          buttonText="Find your group"
          buttonLink="/groups"
          buttonColor="var(--pink)"
        />
      </FadeInSection>
    </div>
  );
};

export default Contact;
