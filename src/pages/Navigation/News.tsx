import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { X, ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import "./News.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Carousel inside each card
function ImageCarousel({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = window.setInterval(() => {
        setCurrentIndex((current) => (current + 1) % images.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, images.length, interval]);

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative group">
      <img
        src={images[currentIndex]}
        alt="News and Events"
        className="w-full h-48 object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Facilities data
const facilities = [
  {
    id: 1,
    title: "MET UTSAV 2025",
    description:
      "MET Utsav 2025 is a vibrant event showcasing talent, creativity, and collaboration through exciting competitions.",
    images: [
      "/src/assets/News/utsav3.jpeg",
      "/src/assets/News/utsav2.webp",
      "/src/assets/News/utsav.webp",
    ],
    details:
      "MET Utsav 2025 was a vibrant celebration of student talent, featuring cultural performances, competitions, and creative showcases. The event fostered teamwork, enthusiasm, and innovation, making it a standout moment in the academic year.",
  },
  {
    id: 2,
    title: "Savitribai Phule Birth Anniversary",
    description:
      "Tribute to Savitribai Phule’s legacy celebrated with speeches and garlanding ceremony on 10th March 2025.",
    images: ["/src/assets/News/n1.jpg", "/src/assets/News/n2.jpg", "/src/assets/News/n3.jpg"],
    details:
      "On March 10, 2025, MET Bhujbal Knowledge City observed the 128th death anniversary of Krantijyoti Savitribai Phule. Tributes were paid to Savitribai and Mahatma Jyotirao Phule at the main building. The event, moderated by Prof. Snehal Ukhade, featured student Sukhada Geete speaking on Savitribai’s legacy, while Sakshi Ghusale and Harshali Bodhale offered garlands.",
  },
  {
    id: 3,
    title: "Science Exhibition Program",
    description:
      "Young innovators showcased creativity and brilliance at MET’s Science Exhibition on 28th February 2025",
    images: ["/src/assets/News/science.jpg"],
    details:
      "MET Bhujbal Knowledge City hosted a vibrant Science Exhibition where students showcased innovative projects and models. The event highlighted their creativity, scientific spirit, and teamwork through interactive displays and experiments.",
  },
  {
    id: 4,
    title: "Mega Campus Drive 2025 – Empowering Women Through Career Opportunities",
    description:
      "Mega Campus Drive 2025 empowered 650+ women; 450+ job offers from top recruiters secured.",
    images: ["/src/assets/News/women.jpg"],
    details:
      "MET's Institute of Technology Polytechnic, Nashik, in collaboration with TNS Group, organized Mega Campus Drive 2025, empowering 650+ female Polytechnic and ITI students.",
  },
  {
    id: 5,
    title: "MET Team Shines at Techguru 2K25",
    description:
      "Civil students won 1st Prize for IoT-based drought prediction project at Techguru 2K25, Nashik.",
    images: ["/src/assets/News/techguru.jpg"],
    details:
      "On 5th April 2025, Civil Engineering students from MET's Institute of Engineering won 1st Prize at Techguru 2K25 for their interdisciplinary project on drought prediction using Remote Sensing, GIS, and IoT.",
  },
  {
    id: 6,
    title: "1st Runner Up Award In AIMS",
    description:
      "MET s IOM has won 1st Runner Up Award In AIMS Convention held at New Delhi.",
    images: ["/src/assets/News/aims.jpg"],
    details:
      "MET's Institute of Management (IOM) proudly secured the 1st Runner Up Award at the AIMS Convention held in New Delhi. This recognition highlights the institute's commitment to excellence in management education.",
  },
  {
    id: 7,
    title: "Exploring the Future of Cloud Technology",
    description:
      "3rd-year Computer Engineering students visited ESDS Software Solutions to explore cloud infrastructure and career opportunities.",
    images: ["/src/assets/News/cloud.jpg"],
    details:
      "On April 3, 2025, MET Computer Engineering students visited ESDS Nashik for insights on cloud services, AI, and data analytics. The session offered valuable industry exposure and career guidance.",
  },
  {
    id: 8,
    title: "Shaping Tomorrow’s Leaders Through Personality Development!",
    description:
      "Marketing Meet 2025 brought together alumni and experts to explore digital marketing, tools, and innovation.",
    images: ["/src/assets/News/shape.jpg"],
    details:
      "The Marketing Meet 2025 focused on innovation in digital marketing. Experts and alumni shared real-world strategies and journeys during MET Talk sessions.",
  },
  {
    id: 9,
    title: "Women Entrepreneurs in Health & Wellness",
    description:
      "MET's Institute of Engineering in Nashik organized an event to promote women entrepreneurship in health and wellness.",
    images: ["/src/assets/News/w1.jpeg"],
    details:
      "This event focused on supporting and promoting women in entrepreneurship, especially in the field of health and wellness, emphasizing economic and social development.",
  },
];

const News = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Layout>
      <main className="max-w-6xl mx-auto py-12 px-4">
        <div
          className="flex items-center gap-2 mb-8"
          data-aos="fade-right"
        >
          <Newspaper className="text-[#800000] w-7 h-7" />
          <h2 className="text-2xl font-bold text-[#800000]">News And Events</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              data-aos="fade-up"
              data-aos-duration="1200"
              className="bg-white rounded-lg shadow-lg shadow-[#80000022] overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedFacility(facility)}
            >
              <ImageCarousel images={facility.images} />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
                <button className="mt-4 text-[#800000] font-medium hover:text-red-700">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedFacility && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center px-4 py-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-xl transform transition-all duration-500 scale-100 opacity-100 animate-fadeIn">
            {/* Swiper Carousel in Popup */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="w-full h-[300px]"
              >
                {selectedFacility.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[300px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow hover:bg-gray-100 z-10"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Popup Text Content */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-[#800000] mb-2">
                {selectedFacility.title}
              </h3>
              <p className="text-gray-700 mb-1">{selectedFacility.description}</p>
              <p className="text-gray-600 text-sm">{selectedFacility.details}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default News;
