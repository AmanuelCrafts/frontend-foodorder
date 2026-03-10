import { useState } from "react";
import { assets } from "../../assets/assets";
import "./About.css";
import Img from "../../img.jpg";
import Img1 from "../../img1.jpg";
import Img2 from "../../img2.jpg";

import Logo1 from "./image.png";
import Logo2 from "./awash.png";
import Logo3 from "./dashen.png";
import Logo4 from "./EC.png";
import Logo5 from "./eiabc.png";
import Logo6 from "./psts.jpeg";

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
          Founded in 2008, Kerevat Cafe & Restaurant has been a beloved local
          spot where tradition meets modern culinary art. <br /> I.
          Organizational Overview Founded in 2008 E.C. with a foundational
          capital of 1,000,000 ETB and a team of 15 personnel, Kerevat has since
          ascended to a leadership position within the hospitality sector. We
          have transitioned from a specialized startup into a premier service
          provider, consistently delivering excellence to high-profile
          governmental institutions and major private sector banks. <br /> II.
          Core Culinary Operations Kerevat’s primary focus lies in the
          professional management of upscale Café and Restaurant environments.
          Our operational profile is defined by: Premium Café Experience: We
          provide a sophisticated atmosphere tailored for both corporate
          networking and refined social engagement, centered around artisanal
          coffee and high-quality culinary offerings. Full-Scale Catering &
          Hosting: Beyond traditional dining, we specialize in high-capacity
          catering and event hosting, ensuring seamless execution for
          prestigious institutional functions and banking events. Strategic
          Growth: Our evolution from a small team to a pivotal industry player
          is rooted in our ability to scale luxury service standards while
          maintaining rigorous quality control. III. Service Philosophy At
          Kerevat, we merge traditional hospitality with modern efficiency. Our
          reputation among Ethiopia’s leading financial and state institutions
          is built upon a commitment to professional excellence, culinary
          innovation, and a guest-centric approach that defines the modern
          restaurant sector.
        </p>

        {/* ================== LOGO INFINITE LOOP ================== */}
        <h2>Our Partners</h2>
        <div className="logo-slider">
          <div className="logo-track">
            <img src={Logo1} alt="Partner 1" />
            <img src={Logo2} alt="Partner 2" />
            <img src={Logo3} alt="Partner 3" />
            <img src={Logo4} alt="Partner 4" />

            {/* Duplicate for smooth infinite loop */}
            <img src={Logo5} alt="Partner 1" />
            <img src={Logo6} alt="Partner 2" />
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
