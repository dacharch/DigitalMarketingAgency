import React, { useState } from "react";
import "./Services.css";
import {
  FaVideo,
  FaPenNib,
  FaSearch,
  FaPaintBrush,
  FaBullhorn,
  FaGlobe,
  FaMobileAlt,
  FaSms,
  FaChartLine,
  FaFilter,
  FaFilm,
  FaUserCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  { icon: <FaVideo />, text: "Content Creation", desc: "We create engaging content that builds brand presence and connects with your audience." },
  { icon: <FaFilm />, text: "Video Editing", desc: "Professional video editing that makes your reels, ads, and promos look premium and impactful." },
  { icon: <FaPenNib />, text: "Content Writing", desc: "High-quality content writing for websites, blogs, ads, and social media to boost engagement." },
  { icon: <FaSearch />, text: "Content Research", desc: "In-depth research to ensure your content is accurate, trending, and valuable to your audience." },
  { icon: <FaPaintBrush />, text: "Graphic Designing", desc: "Creative designs for social media, branding, ads, and marketing materials that stand out." },
  { icon: <FaBullhorn />, text: "Meta Ads", desc: "High-converting Facebook & Instagram ad campaigns to generate leads and sales." },
  { icon: <FaGlobe />, text: "Web Development", desc: "We build fast, modern, and responsive websites that convert visitors into customers." },
  { icon: <FaMobileAlt />, text: "App Development", desc: "Custom Android and iOS app development to bring your business directly into users’ hands." },
  { icon: <FaSms />, text: "Bulk SMS", desc: "Reach thousands of customers instantly with targeted and reliable bulk SMS campaigns." },
  { icon: <FaChartLine />, text: "SEO Optimization", desc: "Rank higher on Google and drive organic traffic with our expert SEO strategies." },
  { icon: <FaFilter />, text: "Sales Funnels", desc: "We create high-converting funnels that turn visitors into leads and leads into customers." },
  { icon: <FaVideo />, text: "Motion Graphics", desc: "Eye-catching motion graphics videos that make your brand messaging more dynamic and engaging." },
  { icon: <FaUserCircle />, text: "UGC Videos", desc: "Authentic user-generated style videos that build trust and improve ad performance." },
];

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    if (startIndex + itemsPerView < services.length) {
      setStartIndex(prev => prev + itemsPerView);
    }
  };

  const prevSlide = () => {
    if (startIndex - itemsPerView >= 0) {
      setStartIndex(prev => prev - itemsPerView);
    }
  };

  const visibleServices = services.slice(startIndex, startIndex + itemsPerView);

  return (
    <section className="service-container">
      <div className="service-header">
        <h2>Our Services</h2>
        <p>What we offer to grow your business</p>
      </div>

      <div className="slider-wrapper">
        <div className="service-cards">
          {visibleServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.text}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Buttons */}
      <div className="arrow-center">
        <button
          className="arrow"
          onClick={prevSlide}
          disabled={startIndex === 0}
        >
          <FaArrowLeft />
        </button>

        <button
          className="arrow"
          onClick={nextSlide}
          disabled={startIndex + itemsPerView >= services.length}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Services;
