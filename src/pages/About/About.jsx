import { useState } from "react";
import { assets } from "../../assets/assets";
import "./About.css";
import Img from "../../img.jpg";
import Img1 from "../../img1.jpg";
import Img2 from "../../img2.jpg";

import Logo1 from "./image.png";
import Logo2 from "./awash.png";
import Logo3 from "./dashen.png";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [Img, Img1, Img2];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <main className="about-us">
      <section className="about-hero">
        <img
          src={assets.logo}
          alt="Kerevat Cafe & Restaurant"
          className="about-hero-img"
        />
        <h1>Welcome to Kerevat Cafe & Restaurant</h1>
        <p className="tagline">Where tradition meets passion in every bite.</p>
      </section>

      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          Founded in 1999, Kerevat Cafe & Restaurant has been a beloved local
          spot where tradition meets modern culinary art.
        </p>

        {/* ================== LOGO INFINITE LOOP ================== */}
        <h2>Our Partners</h2>
        <div className="logo-slider">
          <div className="logo-track">
            <img src={Logo1} alt="Partner 1" />
            <img src={Logo2} alt="Partner 2" />
            <img src={Logo3} alt="Partner 3" />
            <img src={Logo1} alt="Partner 4" />

            {/* Duplicate for smooth infinite loop */}
            <img src={Logo2} alt="Partner 1" />
            <img src={Logo3} alt="Partner 2" />
            <img src={Logo1} alt="Partner 3" />
            <img src={Logo2} alt="Partner 4" />
          </div>
        </div>

        {/* ================== CERTIFICATE CAROUSEL ================== */}
        <h2>Our Certifications</h2>
        <div className="certificate-carousel">
          <button onClick={prevSlide} className="carousel-btn">
            ❮
          </button>

          <img
            src={certificates[currentIndex]}
            alt="Certificate"
            className="certificate-image"
          />

          <button onClick={nextSlide} className="carousel-btn">
            ❯
          </button>
        </div>

        <h2>Visit Us</h2>
        <p>
          We are located in the heart of the city, ready to welcome you every
          day from 8 AM to 10 PM.
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
