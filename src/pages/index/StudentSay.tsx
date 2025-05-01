import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./StudentSay.css";

const testimonials = [
  {
    name: "Khushbu Agrawal",
    position: "BigData Analyst",
    company: "Volvo Group, Switzerland Zurich",
    image: "/src/assets/studentsay/s1.jpg",
    testimonial:
      "To the faculty, I will forever be obliged to MET IOE and the faculty for making me believe I can do it. They have been very supportive, inspiring and challenging taskmasters for us...",
  },
  {
    name: "Arpeet Kale",
    position: "Lead Software Engineer - Artificial Intellige",
    image: "/src/assets/studentsay/s2.jpg",
    testimonial:
      "Congratulations to MET on successfully completing 30 years of providing excellent academic infrastructure and services...",
  },
];

const StudentSay: React.FC = () => {
  return (
    <section className="student-say-section w-full bg-no-repeat bg-center bg-contain sm:bg-bottom">
      <div className="max-w-3xl mx-auto px-4 py-4 sm:py-6 md:py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-[#800000]">
          STUDENT SPEAK
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="testimonialSwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center px-2 py-4">
                {/* Profile Image */}
                <div className="mb-3 flex justify-center order-1">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-[#800000]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name, Role, Company */}
                <div className="text-center text-black w-full max-w-md order-2">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 text-[#800000]">
                    {testimonial.name}
                  </h4>
                  {testimonial.position && (
                    <p className="text-xs sm:text-sm opacity-90 mb-1">
                      {testimonial.position}
                    </p>
                  )}
                  {testimonial.company && (
                    <p className="text-xs sm:text-sm opacity-90">
                      {testimonial.company}
                    </p>
                  )}
                </div>

                {/* Testimonial */}
                <p className="testimonial-description text-sm sm:text-base italic text-center text-black px-2 sm:px-4 leading-relaxed mb-4 order-3 sm:order-none mt-3 sm:mt-0">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StudentSay;
