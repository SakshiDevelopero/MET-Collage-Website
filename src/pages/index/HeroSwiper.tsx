import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HeroSwiper.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface HeroImage {
  src: string;
  alt: string;
}

const heroImages: HeroImage[] = [
  { src: "/src/assets/images/img1.jpg", alt: "MET Bhujbal Knowledge City Campus" },
  { src: "/src/assets/images/img2.webp", alt: "Students at MET BKc" },
  { src: "/src/assets/images/img3.jpg", alt: "MET BKc Library" },
  { src: "/src/assets/images/image6.png", alt: "MET BKc Auditorium" },
  { src: "/src/assets/images/image4.webp", alt: "MET BKc Classroom" },
  { src: "/src/assets/images/im2.jpg", alt: "MET BKc Event" },
  { src: "/src/assets/images/im5.jpg", alt: "MET BKc Laboratory" },
  { src: "/src/assets/images/im9.jpg", alt: "MET BKc Sports Facility" },
];

const HeroSwiper: React.FC = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="hero-swiper-container">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="heroSwiper"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-container">
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="swiper-image"
                  loading="lazy"
                />
              </div>
              <div className="overlay">
                {index === 0 && (
                  <div
                    data-aos="fade-up"
                    className="overlay-content"
                  >
                    <h1 className="title">Welcome to MET Bhujbal Knowledge City</h1>
                    <p className="subtitle">Empowering Students for a Brighter Future</p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
