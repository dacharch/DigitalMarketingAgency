import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "./Hero.css";

const HeroSlider = () => {
  return (
    <div className="tw-hero-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop={true}
        speed={1000}
      >
        {/* ===== SLIDE 1 ===== */}
        <SwiperSlide>
          <div className="slider-premium">
            <div className="container text-center hero-content">

              <h4 className="hero-subtitle">
                Performance-Driven Digital Agency
              </h4>

              <h1 className="hero-title">
                Grow Faster with{" "}
                <span className="brand-name">My Work Media</span>
              </h1>

              <p className="hero-description">
                We help ambitious brands scale through strategic SEO, paid advertising,
                and high-converting digital campaigns focused on measurable ROI.
              </p>

              <div className="hero-buttons">
                <a
                  href="https://wa.me/919220145333?text=Hi%20My%20Work%20Media,%20I%20would%20like%20to%20discuss%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FaWhatsapp /> Contact Us
                </a>

                {/* <a href="#" className="btn-outline">
                  View Our Work <FaArrowRight />
                </a> */}
              </div>

              <div className="hero-trust">
                Trusted Digital Marketing Agency Across India
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* ===== SLIDE 2 ===== */}
        <SwiperSlide>
          <div className="slider-premium dark-slide">
            <div className="container text-center hero-content">

              <h1 className="hero-title">
                Dominate Search with{" "}
                <span className="brand-name">Strategic SEO</span>
              </h1>

              <p className="hero-description">
                Rank higher, attract qualified traffic, and convert visitors
                into loyal customers with proven optimization strategies.
              </p>

              {/* <div className="hero-buttons">
                <a href="#" className="btn-primary">
                  Get Free SEO Audit
                </a>
              </div> */}

            </div>
          </div>
        </SwiperSlide>

        {/* ===== SLIDE 3 ===== */}
        <SwiperSlide>
          <div className="slider-premium">
            <div className="container text-center hero-content">

              <h1 className="hero-title">
                Social Media That Creates{" "}
                <span className="brand-name">Real Impact</span>
              </h1>

              <p className="hero-description">
                From content strategy to performance campaigns, we build
                strong brand presence that engages and converts.
              </p>

              <div className="hero-buttons">
                <a
                  href="https://wa.me/919716229244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Start Growing Today
                </a>
              </div>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HeroSlider;