import React, { useEffect } from "react";
import AboutLayout from "@/components/layout/AboutLayout";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./advantage.css";

interface AdvantageItem {
  id: number;
  text: string;
}

interface AdvantageCategory {
  title: string;
  items: AdvantageItem[];
}

const AdvantageMET: React.FC = () => {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 600, // Shorter animation duration for faster transition
      easing: "ease-out", // Fast easing function
      once: true, // Animation happens only once when in view
    });
  }, []);

  // Data for advantages sections
  const advantageCategories: AdvantageCategory[] = [
    {
      title: "Academic Excellence",
      items: [
        { id: 1, text: "MET is an NGO in Special Consultative Status with UN(ECOSOC)" },
        { id: 2, text: "Ranked the 13th best B School in South Asia by Asia Inc. Magazine" },
        { id: 3, text: "4th best B School in West India and 13th best All India by DNA" },
        { id: 4, text: "12th best private B School in India by CNBC TV18" },
        { id: 5, text: "Ranked 'A++' grade B School by Business India" },
        { id: 6, text: "Ranked in the 'A3' category by All India Management Association" },
        { id: 7, text: "Freeship programme for meritorious students" },
        { id: 8, text: "MET BKC IOP - one of the best institutes at university and state level" },
      ]
    },
    {
      title: "Industry & Research",
      items: [
        { id: 9, text: "Excellent placement opportunities" },
        { id: 10, text: "Superior Intellectual Capital with extensive experience" },
        { id: 11, text: "Well-networked with top Industries and academia globally" },
        { id: 12, text: "Highly recognized reputation in Pharma Industries" },
        { id: 13, text: "Research Projects in Engineering and Pharmacy" },
        { id: 14, text: "Exposure to Industry Projects And Development" },
        { id: 15, text: "Outstanding Indian/Global Industry Interface" },
        { id: 16, text: "Research focused faculty with 25+ years cumulative experience" },
      ]
    },
    {
      title: "Campus & Facilities",
      items: [
        { id: 17, text: "State-of-the-art Infrastructural Facilities" },
        { id: 18, text: "Entirely Wi-Fi campus with high-speed Internet" },
        { id: 19, text: "High quality Video Lectures covering all Subjects" },
        { id: 20, text: "MET World Of Music for relaxation and stress relief" },
        { id: 21, text: "Live Management Threshold program" },
        { id: 22, text: "Amrita Virtual Laboratories Nodal Center" },
        { id: 23, text: "IIT - Spoken Tutorial programs" },
        { id: 24, text: "NPTEL Local Chapter" },
      ]
    },
    {
      title: "Student Support",
      items: [
        { id: 25, text: "Counseling Cell for student support" },
        { id: 26, text: "Strong alumni base of 1000+ students" },
        { id: 27, text: "Globalized learning systems with Indian ethos" },
        { id: 28, text: "MOOC Courses availability" },
        { id: 29, text: "Enlightened interaction for urban-rural synergy" },
        { id: 30, text: "Corporate Social Responsibility programs" },
        { id: 31, text: "Adopted villages and orphanages near Nashik" },
        { id: 32, text: "Exposure to World Class activities like MET Utsav" },
      ]
    }
  ];

  return (
    <AboutLayout>
      <div className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-[#800000] mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#800000] to-[#800000]">
              ADVANTAGE MET
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why MET stands out among educational institutions with these exceptional advantages
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantageCategories.map((category, index) => (
            <div
              key={category.title}
              data-aos={index % 4 === 0 ? "fade-up" : index % 4 === 1 ? "fade-right" : index % 4 === 2 ? "fade-left" : "fade-down"}
              data-aos-delay={`${index * 100}`} // Stagger delay for animations
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-[#800000] hover:shadow-[#800000] "
              style={{
                boxShadow: "4px 4px 8px rgba(128, 0, 0, 0.2), -4px -4px 8px rgba(128, 0, 0, 0.1)", // Light glow effect on right and bottom
              }}
            >
              <h2 className="text-2xl font-bold text-[#800000] mb-6 pb-2 border-b-2" style={{ borderColor: "#800000" }}>
                {category.title}
              </h2>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.id} className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-3 text-[#800000]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AboutLayout>
  );
};

export default AdvantageMET;
