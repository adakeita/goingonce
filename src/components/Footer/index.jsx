import { Link } from "@tanstack/react-router";
import Logo from "../../assets/images/footer-logo.png";
import Github from "../../assets/images/github-icon.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="main-footer">
        <div className="footer-content">
          <section className="footer-right">
            <div className="footer-logo-wrapper">
              <img src={Logo} alt="Logo" className="footer-logo" />
            </div>
          </section>
          <section className="footer-middle">
            <div className="footer-links-container">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="/listings" className="footer-link">
                Listings
              </Link>
            </div>
          </section>
          <section className="footer-left">
            <div className="contact-content">
              <div className="email-container">
                <h3 className="contact-header">Contact</h3>
                <a
                  role="button"
                  href="mailto:hello@adakeita.dev"
                  aria-label="Send an email to hello@adakeita.dev"
                >
                  hello@adakeita.dev
                </a>
              </div>
              <div className="github-container">
                <Link to="https://www.github.com/adakeita">
                  <img src={Github} alt="Github-link" className="github-icon" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
