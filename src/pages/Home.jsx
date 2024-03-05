import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1 from "../assets/homePageSlider/slide1.png";
import slide2 from "../assets/homePageSlider/slide2.png";

const Home = () => {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        style={{
          borderRadius: "15px",
          height: "100%",
          width: "100%",
          marginBottom: "40px",
        }}
        slidesPerView={2}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
