import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <div className="tw-hero-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        speed={1100}
      >
        {/* ===== SLIDE 1 ===== */}
        <SwiperSlide>
          <div className="slider-1 slider-map-pattern">
            <div className="container text-center">
              <img src="images/slider1.png" className="img-fluid" />
              <h1 className="tw-slider-subtitle">
                Search Engine Optimization
              </h1>
              <h4 className="tw-slider-title">
                Digital Marketing <span>Solution</span>
              </h4>
              <a href="#" className="btn btn-primary">Submit Now</a>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== SLIDE 2 ===== */}
        <SwiperSlide>
          <div className="slider-2 container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1>We are Creating Custom <span>SEO</span></h1>
                <p>
                  Generate awareness, drive traffic, connect with customers,
                  and increase sales.
                </p>
                <a href="#" className="btn btn-dark">Free Analysis</a>
              </div>
              <div className="col-md-6">
                <img src="images/slider2.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== SLIDE 3 ===== */}
        <SwiperSlide>
          <div className="slider-3 container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="images/slider3.png" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h1>We serve best <span>Local SEO</span> service</h1>
                <p>
                  Generate awareness, drive traffic, connect with customers,
                  and increase sales.
                </p>
                <a href="#" className="btn btn-dark">Free Analysis</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
