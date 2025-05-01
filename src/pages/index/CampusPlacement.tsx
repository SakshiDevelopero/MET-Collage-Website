import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./CampusPlacement.css";

// Data arrays
const highestPackage = [
  {
    img: "/src/assets/placement/p/p1.jpeg",
    name: "Tanvi Nirmal",
    company: "Walmart Global Technology Services India",
    ctc: "22.48 L.P.A",
    branch: "Computer Engineering",
    institute: "Institute of Engineering",
  },
  {
    img: "/src/assets/placement/p/p2.jpg",
    name: "Abhishek Nahire",
    company: "BYJU's",
    ctc: "11 L.P.A",
    branch: "Mechanical Engineering",
    institute: "Institute of Engineering",
  },
  {
    img: "/src/assets/placement/p/p4.jpeg",
    name: "Abhijeet Shilpi",
    company: "BYJU's",
    ctc: "10 L.P.A",
    branch: "Mechanical Engineering",
    institute: "Institute of Engineering",
  },
  {
    img: "/src/assets/placement/p/p5.jpg",
    name: "Anubhav Goyal",
    company: "FinIQ",
    ctc: "9 L.P.A",
    branch: "Computer Engineering",
    institute: "Institute of Engineering",
  },
  {
    img: "/src/assets/placement/p/p6.jpeg",
    name: "Giwil Gidwani",
    company: "Gushup Technology",
    ctc: "15 L.P.A",
    branch: "Computer Engineering",
    institute: "Institute of Engineering",
  },
  {
    img: "/src/assets/placement/p/p7.jpeg",
    name: "Abhishek Joshi",
    company: "BYJU's ",
    ctc: "10 L.P.A",
    branch: "Mechanical Engineering",
    institute: "Institute of Engineering",
  },
  {
    img: "/src/assets/placement/p/p8.jpeg",
    name: "Abhishek Palve",
    company: "FinIQ ",
    ctc: "9 L.P.A",
    branch: "Computer Engineering",
    institute: "Institute of Engineering",
  },
  {
    img: "/src/assets/placement/p/p9.jpg",
    name: "Priyanka Chawla",
    company: "Jaro Education ",
    ctc: "8.64 L.P.A",
    institute: "Institute of Management",
  },
  {
    img: "/src/assets/placement/p/p10.jpg",
    name: "Meenakshi Jangid",
    company: "Morningstar India Ltd. ",
    ctc: "7.60 L.P.A",
    institute: "Institute of Information Technology (CDAC-ACT)",
  },
  {
    img: "/src/assets/placement/p/p11.jpg",
    name: "Vikas Hatekar",
    company: "Vimta Labs Ltd., Hyderabad ",
    institute: "Vimta Labs Ltd., HyderabadInstitute of Management",
  },
  {
    img: "/src/assets/placement/p/p12.jpg",
    name: "Aashish Ahire",
    company: "Xylopia Labs Pvt. Ltd., Ahmedabad ",
    institute: "Institute of Pharmacy",
  },
  {
    img: "/src/assets/placement/p/p13.jpeg",
    name: "Yuvraj Deshmukh",
    company: "Capgemini",
    ctc: "4.25 L.P.A",
    institute: "Electrical Engineering, Institute of Engineering",
  },
  {
    img: "/src/assets/placement/p/p14.jpg",
    name: "Tejashree Shravji",
    company: "Capgemini",
    ctc: "4.25 L.P.A",
    institute: "Electrical Engineering, Institute of Engineering",
  },
];

const statsImages = [
  "/src/assets/placement/S/s1.jpg",
  "/src/assets/placement/S/s2.jpg",
  "/src/assets/placement/S/s3.jpg",
  "/src/assets/placement/S/s4.jpg",
];

const recruitmentImages = [
  "/src/assets/placement/R/C1.jpg",
  "/src/assets/placement/R/C2.jpg",
  "/src/assets/placement/R/C3.jpg",
  "/src/assets/placement/R/C4.jpg",
  "/src/assets/placement/R/CR1.jpeg",
  "/src/assets/placement/R/CR2.jpeg",
  "/src/assets/placement/R/CR3.jpeg",
  "/src/assets/placement/R/CR4.jpeg",
  "/src/assets/placement/R/CR5.jpeg",
  "/src/assets/placement/R/CR6.jpeg",
  "/src/assets/placement/R/CR7.jpeg",
  "/src/assets/placement/R/CR8.jpeg",
  "/src/assets/placement/R/CR9.jpeg",
  "/src/assets/placement/R/CR11.jpeg",
  "/src/assets/placement/R/CR12.jpeg",
  "/src/assets/placement/R/CR13.jpeg",
  "/src/assets/placement/R/dmart.jpg",
  "/src/assets/placement/R/tata.jpg",
];

const CampusPlacement = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#800000]">
          CAMPUS PLACEMENT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Highest Package */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="bg-[#800000] text-white p-4">
              <h3 className="text-xl font-bold">HIGHEST PACKAGE</h3>
            </div>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="placement-swiper"
            >
              {highestPackage.map((student, idx) => (
                <SwiperSlide key={idx}>
                  <div className="p-4 text-center flex flex-col items-center justify-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#800000] mb-3">
                      <img
                        src={student.img}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold mb-1 text-[#800000]">{student.name}</h4>
                    <p className="text-gray-600 text-sm">{student.company}</p>
                    <p className="text-[#800000] font-semibold mt-2 text-sm">CTC: {student.ctc}</p>
                    <p className="text-xs text-gray-500 mt-1">{student.branch}</p>
                    <p className="text-xs text-gray-500">{student.institute}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Placement Statistics */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="bg-[#800000] text-white p-4">
              <h3 className="text-xl font-bold"> PLACEMENT STATISTICS</h3>
            </div>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="placement-swiper"
            >
              {statsImages.map((imgPath, idx) => (
                <SwiperSlide key={idx}>
                  <div className="aspect-video">
                    <img
                      src={imgPath}
                      alt={`stat-${idx}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Current Recruitment */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="bg-[#800000] text-white p-4">
              <h3 className="text-xl font-bold">CURRENT RECRUITMENT</h3>
            </div>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="placement-swiper"
            >
              {recruitmentImages.map((imgPath, idx) => (
                <SwiperSlide key={idx}>
                  <div className="aspect-video">
                    <img
                      src={imgPath}
                      alt={`recruit-${idx}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusPlacement;
