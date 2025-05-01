import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Button } from "@/components/ui/button";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "./Institutes.css";

const institutes = [
  { 
    title: "MBSE", 
    fullTitle: "Meena Bhujbal School Of Excellence",
    icon: "🏫", 
    path: "https://www.metmbse.ac.in/", 
    image: "/src/assets/Institutes/MBSE.jpg"
  },
  { 
    title: "Engineering", 
    fullTitle: "Institute Of Engineering",
    icon: "🏗️", 
    path: "https://metbkcengg.ac.in/" ,
    image: "/src/assets/Institutes/engineering.jpeg"
  },
  { 
    title: "Polytechnic", 
    fullTitle: "Institute Of Technology, Polytechnic",
    icon: "🔧", 
    path: "https://metbhujbalknowledgecity.ac.in/metpoly/",
    image: "/src/assets/Institutes/Polytechnic.jpg"
  },
  { 
    title: "Information Technology", 
    fullTitle: "Institute of Information Technology (C-DAC-ATC)",
    icon: "💻", 
    path: "https://www.metbkciit.ac.in/",
    image: "/src/assets/Institutes/im3.jpg"
  },
  { 
    title: "Management", 
    fullTitle: "Institute Of Management",
    icon: "📊", 
    path: "https://metbhujbalknowledgecity.ac.in/metmba/",
    image: "/src/assets/Institutes/in1.webp"
  },
  { 
    title: "Pharmacy", 
    fullTitle: "Institute Of Pharmacy",
    icon: "💊", 
    path: "https://metbhujbalknowledgecity.ac.in/metpharm/",
    image: "/src/assets/Institutes/pharmacy.jpg"
  },
  { 
    title: "B.Pharm D.Pharm", 
    fullTitle: "Institute of D. Pharmacy (B.Pharm, D.Pharm)",
    icon: "💉", 
    path: "https://metbhujbalknowledgecity.ac.in/metdpharm/",
    image: "/src/assets/Institutes/dpharm.jpeg"
  },
  { 
    title: "Science & Commerce", 
    fullTitle: "Bhujbal Academy of Science & Commerce",
    icon: "🧪", 
    path: "https://metbhujbalknowledgecity.ac.in/metjrclg/",
    image: "/src/assets/Institutes/BASC.jpg"
  },
  { 
    title: "Architecture & Interior Design", 
    fullTitle: "School of Architecture & Interior Design",
    icon: "🏛️", 
    path: "https://www.metbkcsoaid.ac.in/",
    image: "/src/assets/Institutes/architecture.jpeg"
  },
];

const Institutes = () => {
  return (
    <section className="py-12 bg-[rgba(128,0,0,0.05)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#800000]">Our Institutes</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore our diverse range of institutes offering quality education across multiple disciplines
        </p>
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          initialSlide={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Autoplay]}
          className="institutesSwiper"
        >
          {institutes.map((institute, index) => (
            <SwiperSlide key={index} className="institute-slide">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-full">
                <div 
                  className="h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${institute.image})` }}
                >
                  <div className="institute-overlay absolute inset-0 bg-[#800000] bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                    <Button 
                      variant="outline" 
                      className="mt-3 border-white text-[#800000] bg-white hover:bg-[#800000] hover:text-white"
                      onClick={() => window.open(institute.path, '_self')}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg text-[#800000]">{institute.title}</h3>
                <p className="text-gray-600 text-sm">{institute.fullTitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Institutes;
