import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MetInfo.css";

const metInfoImages = [
  "/src/assets/about/im1.webp",
  "/src/assets/about/about.jpg",
  "/src/assets/about/about2.jpg",
  "/src/assets/about/about3.jpg",
  "/src/assets/about/about4.jpg",
];

const metSections = [
  {
    title: "Excellence in Education",
    content: [
      "MET Bhujbal Knowledge City is committed to providing exceptional educational experiences that prepare students for success in a rapidly evolving global landscape.",
      "With state-of-the-art infrastructure, experienced faculty, and industry-focused curriculum, we strive to create an environment where innovation thrives and knowledge flourishes.",
      "Our institutes offer diverse programs ranging from engineering to management, all designed to equip students with the skills and knowledge needed to excel in their chosen fields.",
      "At MET, we believe in holistic development that extends beyond academic excellence, fostering leadership, creativity, and social responsibility.",
    ],
    animation: "fade-down-right",
  },
  {
    title: "Modern Infrastructure & Innovation",
    content: [
      "Our campus boasts cutting-edge laboratories, digital libraries, tech-enabled classrooms, and collaborative learning spaces.",
      "We focus on nurturing creativity and innovation through research initiatives, entrepreneurship programs, and student-led projects.",
      "MET also provides advanced computer centers, 3D modeling labs, and high-speed internet access across campus to enhance technical skills.",
      "Our innovation cell encourages students to work on real-time solutions through hackathons, incubation, and startup mentoring.",
    ],
    animation: "fade-up",
  },
  {
    title: "Strong Industry Connections",
    content: [
      "MET Bhujbal Knowledge City maintains strong ties with top industry leaders to facilitate internships, live projects, and placements.",
      "We host regular industry expert talks, workshops, and seminars to keep our students industry-ready.",
      "Placement drives are supported by companies like TCS, Infosys, L&T, Cognizant, and Tech Mahindra, ensuring wide career opportunities.",
      "Alumni mentorship and career guidance programs connect current students to real-world industry insights.",
    ],
    animation: "fade-left",
  },
  {
    title: "Discover MET Nashik",
    content: [
      "Located in the heart of Maharashtra's wine capital, MET Nashik offers a serene learning environment amidst natural beauty.",
      "The campus encourages innovation, sustainability, and inclusive growth through its state-of-the-art programs in engineering, pharmacy, and management.",
      "With a strong emphasis on student-driven learning and entrepreneurship, MET Nashik is emerging as a hub of excellence in central India.",
    ],
    animation: "zoom-in-up",
  },
];

const imageAnimations = [
  "fade-right",
  "flip-up",
  "fade-right",
  "fade-down",
  "zoom-in-right",
];

const MetInfo = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sequenceMode, setSequenceMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % metInfoImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLearnMore = () => {
    if (sequenceMode) return;
    setSequenceMode(true);

    const sequence = [1, 2, 3, 0];
    sequence.forEach((sectionIdx, i) => {
      setTimeout(() => {
        setCurrentSectionIndex(sectionIdx);
        if (i === sequence.length - 1) setSequenceMode(false);
      }, i * 2500);
    });
  };

  const currentSection = metSections[currentSectionIndex];
  const currentImageAnimation =
    imageAnimations[activeImageIndex % imageAnimations.length];

  return (
    <section className="py-12 bg-white overflow-visible">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#800000]"
          data-aos="fade-down"
        >
          MET Bhujbal Knowledge City
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Info Section */}
          <div
            className="md:w-1/2 space-y-4 text-justify"
            data-aos={currentSection.animation}
            key={`info-${currentSection.title}`}
          >
            <h3 className="text-2xl font-bold text-[#800000]">
              {currentSection.title}
            </h3>
            {currentSection.content.map((para, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
            {currentSectionIndex === 0 && (
              <button
                onClick={handleLearnMore}
                className="mt-4 bg-[#800000] text-white px-5 py-2 rounded-md hover:bg-red-900 transition"
              >
                Learn More
              </button>
            )}
          </div>

          {/* Image Section - Increased tablet height */}
          <div
            className="w-full md:w-1/2 relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px] min-h-[320px]"
            data-aos={currentImageAnimation}
            key={`image-${activeImageIndex}`}
          >
            {metInfoImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 rounded-lg overflow-hidden shadow-lg transition-opacity duration-700 ${
                  index === activeImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`MET Image ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetInfo;