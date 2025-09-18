import { assets } from "../../assets/assets";
import "./About.css";

const AboutUs = () => {
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
          spot where tradition meets modern culinary art. Our passion is to
          serve you with the freshest ingredients, inspired recipes, and warm
          hospitality that makes every visit memorable.
        </p>

        <div className="fun-fact-box">
          <h3>Fun Fact</h3>
          <p>
            Our signature coffee blend is sourced from local Ethiopian farms,
            roasted fresh weekly to guarantee rich, bold flavors.
          </p>
        </div>

        <h2>Our Mission</h2>
        <p>
          To deliver exceptional dining experiences by combining authentic
          flavors with innovative dishes, creating a space where friends and
          family can gather, relax, and enjoy great food.
        </p>

        <h2>What Makes Us Special</h2>
        <ul>
          <li>Locally sourced fresh ingredients</li>
          <li>Unique menu blending traditional & contemporary cuisines</li>
          <li>Cozy and welcoming atmosphere</li>
          <li>Friendly and professional staff</li>
          <li>Committed to sustainability and community support</li>
        </ul>

        <h2>Photo Highlights</h2>
        <div className="photo-gallery">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
            alt="Delicious pasta dish"
          />
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
            alt="Fresh salad bowl"
          />
          <img
            src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=600&q=80"
            alt="Cozy restaurant dining area"
          />
        </div>

        <h2>Visit Us</h2>
        <p>
          We are located in the heart of the city, ready to welcome you every
          day from 8 AM to 10 PM. Whether you're stopping by for your morning
          coffee or a full-course dinner, Kerevat Cafe & Restaurant is here to
          make your experience unforgettable.
        </p>

        <div className="contact-info">
          <h3>Opening Hours</h3>
          <p>Monday - Sunday: 8 AM - 10 PM</p>
          <h3>Contact</h3>
          <p>Phone: +251 123 456 789</p>
          <p>Email: info@kerevatcafe.com</p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
