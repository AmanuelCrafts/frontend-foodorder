import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src={assets.logo} alt="Logo" className="footer-logo" />
          <p>
            Crafted with care and passion. Enjoy premium quality food delivered
            right to your doorstep.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Facebook"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Instagram"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="food">
          © 2025 Kerevat Cafe & Restaurant. All rights reserved.
        </p>
        <p className="footer-delivery-note">Delivered by Utop Drone Delivery</p>
      </div>
    </footer>
  );
};

export default Footer;
