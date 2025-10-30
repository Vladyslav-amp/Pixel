import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Footer.scss";
import { NAV } from "../../constants/home-sections.js";

const leftLinks = [
  { label: "CONTACT", href: "#contact" },
  { label: "PIXELMAT", href: "#" },
  { label: "LEGAL", href: "#" }
];

const rightLinks = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "WHATSAPP", href: "https://whatsapp.com" }
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    const go = () => scrollToSection(id);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(go, 150);
    } else {
      go();
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-block">
        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__menu">
            {NAV.map((item) => (
              <li className="footer__menu-item" key={item.label}>
                {item.type === "section" ? (
                  <a
                    href={`#${item.id}`}
                    className="footer__menu-link"
                    onClick={(e) => handleSectionClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link className="footer__menu-link" to={item.to}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__bottom">
          <div className="footer__col footer__col--left">
            {leftLinks.map((l) => (
              <a className="footer__link" href={l.href} key={l.label}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="footer__col footer__col--right">
            {rightLinks.map((l) => (
              <a
                className="footer__link"
                href={l.href}
                key={l.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
