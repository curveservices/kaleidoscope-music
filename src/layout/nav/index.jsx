import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuToggle from "../../components/menuToggle";
import Button from "../../components/button";
import "./index.scss";

import {
  faCalendar,
  faEnvelope,
  faEnvelopeOpen,
  faHouse,
  faInfoCircle,
  faPhone,
  faUsers,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const groupLinks = [
  {
    label: "Community Orchestra",
    path: "/community-orchestra",
  },
  {
    label: "String Ensemble",
    path: "/string-ensemble",
  },
  {
    label: "Flute Choir",
    path: "/flute-choir",
  },
  {
    label: "Clarinet Choir",
    path: "/clarinet-choir",
  },
  {
    label: "Saxophone Choir",
    path: "/saxophone-choir",
  },
  {
    label: "Mosaic Sounds",
    path: "/mosaic-sounds",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [groupsOpen, setGroupsOpen] = useState(false);

  const location = useLocation();

  const isGroupPage = groupLinks.some(
    (group) => location.pathname === group.path,
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus whenever the visitor changes page
  useEffect(() => {
    setShowNav(false);
    setGroupsOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setShowNav(false);
    setGroupsOpen(false);
  };

  return (
    <header
      className={`${scrolled ? "navbar-scroll navbar-hidden" : ""} ${
        showNav ? "menu-open" : ""
      }`}
    >
      <NavLink to="/" aria-label="Kaleidoscope Music home">
        <div className="title-container">
          <img src={logo} alt="Kaleidoscope Music" className="mobile-logo" />
        </div>

        <img src={logo} alt="Kaleidoscope Music" className="logo" />
      </NavLink>

      <nav
        className={`navbar ${showNav ? "mobile-show" : ""}`}
        aria-label="Main navigation"
      >
        {/* HOME */}
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="menu-container">
            <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
            <span className="text">Home</span>
          </div>
        </NavLink>

        {/* ABOUT */}
        <NavLink
          to="/about-us"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="menu-container">
            <FontAwesomeIcon icon={faInfoCircle} className="mobile-icon" />
            <span className="text">About</span>
          </div>
        </NavLink>

        {/* GROUPS DROPDOWN */}
        <div
          className={`nav-dropdown ${groupsOpen ? "dropdown-open" : ""} ${
            isGroupPage || location.pathname === "/groups" ? "active" : ""
          }`}
        >
          <div className="nav-dropdown__trigger">
            <NavLink
              to="/groups"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="menu-container">
                <FontAwesomeIcon icon={faUsers} className="mobile-icon" />
                <span className="text">Groups</span>
              </div>
            </NavLink>

            <button
              type="button"
              className="nav-dropdown__toggle"
              aria-label="Toggle groups submenu"
              aria-expanded={groupsOpen}
              onClick={() => setGroupsOpen((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>

          <div className="nav-dropdown__menu">
            <NavLink
              to="/groups"
              onClick={closeMenu}
              className="nav-dropdown__link nav-dropdown__link--all"
            >
              All Groups
            </NavLink>

            {groupLinks.map((group) => (
              <NavLink
                key={group.path}
                to={group.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-dropdown__link ${isActive ? "active" : ""}`
                }
              >
                {group.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* EVENTS */}
        <NavLink
          to="/events"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="menu-container">
            <FontAwesomeIcon icon={faCalendar} className="mobile-icon" />
            <span className="text">Events</span>
          </div>
        </NavLink>

        {/* CONTACT */}
        <NavLink
          to="/contact-us"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="menu-container">
            <FontAwesomeIcon icon={faEnvelope} className="mobile-icon" />
            <span className="text">Contact</span>
          </div>
        </NavLink>

        {/* MOBILE CONTACT DETAILS */}
        <div className="contact-container">
          <div className="text mobile-icon">
            <b>Get In Touch</b>
          </div>

          <a
            href="mailto:info@kaleidoscopemusic.org.uk"
            className="mobile-icon text small menu-container"
          >
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            info@kaleidoscopemusic.org.uk
          </a>

          <a
            href="tel:01234567890"
            className="mobile-icon text small menu-container"
          >
            <FontAwesomeIcon icon={faPhone} />
            Contact us
          </a>
        </div>
      </nav>

      <div className="navbar__cta">
        <Button
          text="Join Us"
          link="/contact-us/#join-us"
          background="var(--pink)"
        />
      </div>

      <MenuToggle showNav={showNav} setShowNav={setShowNav} />
    </header>
  );
};

export default Navbar;
