import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import customer1 from "../assets/customers/customer-1.jpg";
import customer2 from "../assets/customers/customer-2.jpg";
import customer3 from "../assets/customers/customer-3.jpg";
import customer4 from "../assets/customers/customer-4.jpg";
import customer5 from "../assets/customers/customer-5.jpg";
import customer6 from "../assets/customers/customer-6.jpg";

function Hero() {
  return (
    <div className="header">
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Cook, Share, Enjoy: Embrace the Joy of Cooking
          </h1>
          <ptext className="hero-text">
            We Present Our Treasured Collection of Recipes From Across
            Generations and Continents with a hope to Ignite Your Imagination
            and Infuse Your Kitchen with the Timeless Magic of Cooking
          </ptext>
          <Link to="login">
            <button className="recipe-btn">Our Recipes &rarr;</button>
          </Link>
          <div className="hero-customers">
            <div className="customers-imgs">
              <img src={customer1} alt="Customer" className="customer-img" />
              <img src={customer2} alt="Customer " className="customer-img" />
              <img src={customer3} alt="Customer " className="customer-img" />
              <img src={customer4} alt="Customer " className="customer-img" />
              <img src={customer5} alt="Customer " className="customer-img" />
              <img src={customer6} alt="Customer" className="customer-img" />
            </div>
            <p className="customers-text">
              <span className="customers-number">1000+</span> Happy Customers!
            </p>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Hero" className="hero-img" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
