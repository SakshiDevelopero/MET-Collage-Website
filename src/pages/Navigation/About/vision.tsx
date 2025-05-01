import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { useInView } from "react-intersection-observer";
import AboutLayout from "@/components/layout/AboutLayout";
import "./vision.css";

const Vision = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1345);

  const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [faithRef, faithInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [visionRef, visionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1345);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardContent = [
    {
      title: "Our Faith",
      ref: faithRef,
      inView: faithInView,
      content: (
        <div className="text-left space-y-4">
          <div className="sanskrit-text text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            न चोर हार्यं न च राज हार्यं ।<br />
            न भ्रातृभाज्यं न च भारकारि ।।<br />
            व्यये कृते वर्धत एव नित्यं ।<br />
            विद्याधनं सर्वधन प्रधानम् ।।
          </div>
          <div className="translation text-gray-600 italic text-sm sm:text-base leading-relaxed text-center">
            Knowledge can neither be stolen by a thief,<br />
            nor snatched by a king.<br />
            It is indivisible unlike ancestral property,<br />
            it never burdens the bearer,<br />
            it multiplies manifold when offered to others.<br />
            Knowledge is the supreme form of wealth.
          </div>
        </div>
      ),
    },
    {
      title: "Our Vision",
      ref: visionRef,
      inView: visionInView,
      content: (
        <ul className="text-gray-700 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-2 flex-grow">
          <li>Shape professionals for future societal challenges</li>
          <li>Promote research, development, and innovation</li>
          <li>Deliver knowledge through structured learning systems</li>
        </ul>
      ),
    },
    {
      title: "Our Mission",
      ref: missionRef,
      inView: missionInView,
      content: (
        <ul className="text-gray-700 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-2 flex-grow">
          <li>Deliver dynamic learning systems with excellence</li>
          <li>Foster innovation and sustainable business practices</li>
          <li>Nurture a culture of growth and conscience</li>
        </ul>
      ),
    },
  ];

  return (
    <AboutLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div
          ref={titleRef}
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-red-800 mb-4">Our Faith, Vision & Mission</h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#800000] to-[#800000] mx-auto rounded-full mb-6 sm:mb-8"></div>
        </div>

        {isDesktop ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Vision */}
            <div
              ref={visionRef}
              className={`bg-white p-5 sm:p-6 rounded-xl border-l-4 border-[#800000] transition-all duration-1000 ease-in-out delay-200 transform
              shadow-[4px_0_12px_0_rgba(128,0,0,0.6)]
              ${visionInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              hover:scale-[1.02] md:hover:scale-105 hover:border-[#800000] min-h-[300px] md:h-[350px] flex flex-col justify-between md:mt-[50px] lg:mt-[80px]`}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-4 sm:mb-6 pb-2 border-b-2 border-[#800000]/50">Our Vision</h2>
              {cardContent[1].content}
            </div>

            {/* Faith */}
            <div
              ref={faithRef}
              className={`bg-white p-5 sm:p-6 md:p-8 rounded-xl border-l-4 border-[#800000] transition-all duration-1000 ease-in-out transform
              shadow-[4px_0_12px_0_rgba(128,0,0,0.6)]
              ${faithInView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-10 scale-95"}
              hover:scale-[1.02] md:hover:scale-105 hover:border-[#800000] flex flex-col justify-between`}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-4 sm:mb-6 pb-2 border-b-2 border-[#800000]/50">Our Faith</h2>
              {cardContent[0].content}
            </div>

            {/* Mission */}
            <div
              ref={missionRef}
              className={`bg-white p-5 sm:p-6 rounded-xl border-l-4 border-[#800000] transition-all duration-1000 ease-in-out delay-300 transform
              shadow-[4px_0_12px_0_rgba(140,0,0,0.6)]
              ${missionInView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"}
              hover:scale-[1.02] md:hover:scale-105 hover:border-[#800000] min-h-[300px] md:h-[350px] flex flex-col justify-between md:mt-[50px] lg:mt-[80px]`}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-4 sm:mb-6 pb-2 border-b-2 border-[#800000]/50">Our Mission</h2>
              {cardContent[2].content}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center my-8">
            <div className="flex justify-center w-full">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className="vision-card-swiper"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                cardsEffect={{
                  perSlideOffset: 15,
                  perSlideRotate: 5,
                  rotate: true,
                  slideShadows: false,
                }}
              >
                {cardContent.map((card, index) => (
                  <SwiperSlide key={index} className="vision-card">
                    <div className="p-6 h-full flex flex-col bg-white rounded-xl border-l-4 border-[#800000]  shadow-[4px_0_12px_0_rgba(140,0,0,0.6)]">
                      <h2 className="text-2xl font-bold text-[#800000] mb-6 border-b border-[#800000]/30 pb-2">{card.title}</h2>
                      <div className="flex-grow vision-card-content">{card.content}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </AboutLayout>
  );
};

export default Vision;