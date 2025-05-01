import React, { useState, useEffect } from 'react';
import AboutLayout from "@/components/layout/AboutLayout";
import { Award, ShieldCheck, School, Bookmark, GraduationCap, BookOpen, X, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import "./Affiliation.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ImageCarousel({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
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
    <div className="relative group h-48 bg-white flex items-center justify-center">
      <img
        src={images[currentIndex]}
        alt="Accreditation"
        className="max-h-full max-w-full object-contain"
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
                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const Affiliation = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const accreditations = [
    { id: 1, title: 'NBA', description: 'NATIONAL BOARD OF ACCREDITATION', images: ['/src/assets/Affiliation/a1.jpg'], icon: <Award className="w-6 h-6 text-[#800000]" />, details: 'Accredited by the National Board of Accreditation, ensuring quality standards in technical education.' },
    { id: 2, title: 'NAAC', description: 'National Assessment and Accreditation Council', images: ['/src/assets/Affiliation/a2.jpg'], icon: <ShieldCheck className="w-6 h-6 text-[#800000]" />, details: 'Recognized by NAAC for maintaining high standards in education and infrastructure.' },
    { id: 3, title: 'NIRF', description: 'National Institutional Ranking Framework', images: ['/src/assets/Affiliation/a3.png'], icon: <Bookmark className="w-6 h-6 text-[#800000]" />, details: 'Ranked among top institutions in India by the Ministry of Education.' }
  ];

  const affiliations = [
    { id: 4, title: 'SPPU', description: 'Savitribai Phule Pune University', images: ['/src/assets/Affiliation/a4.png'], icon: <GraduationCap className="w-6 h-6 text-[#800000]" />, details: 'Affiliated with Savitribai Phule Pune University.' },
    { id: 5, title: 'BATU', description: 'Dr. Babasaheb Ambedkar Technological University', images: ['/src/assets/Affiliation/a5.png'], icon: <School className="w-6 h-6 text-[#800000]" />, details: 'Recognized by Dr. Babasaheb Ambedkar Technological University.' },
    { id: 6, title: 'MSBTE', description: 'Maharashtra State Board of Technical Education', images: ['/src/assets/Affiliation/a6.png'], icon: <BookOpen className="w-6 h-6 text-[#800000]" />, details: 'Approved by MSBTE for diploma programs.' },
    { id: 7, title: 'AICTE', description: 'All India Council for Technical Education', images: ['/src/assets/Affiliation/a7.png'], icon: <Award className="w-6 h-6 text-[#800000]" />, details: 'Approved by AICTE for technical education programs.' },
    { id: 8, title: 'PCI', description: 'Pharmacy Council of India', images: ['/src/assets/Affiliation/a8.png'], icon: <ShieldCheck className="w-6 h-6 text-[#800000]" />, details: 'Recognized by Pharmacy Council of India.' },
    { id: 9, title: 'COA', description: 'Council of Architecture', images: ['/src/assets/Affiliation/a9.jpg'], icon: <Building2 className="w-6 h-6 text-[#800000]" />, details: 'Approved by Council of Architecture.' }
  ];

  const recognitions = [
    { id: 10, title: 'IIRS', description: 'Indian Institute of Remote Sensing', images: ['/src/assets/Affiliation/a10.png'], icon: <School className="w-6 h-6 text-[#800000]" />, details: 'Collaboration with Indian Institute of Remote Sensing.' },
    { id: 11, title: 'NPTEL', description: 'National Programme on Technology Enhanced Learning', images: ['/src/assets/Affiliation/a11.jpg'], icon: <BookOpen className="w-6 h-6 text-[#800000]" />, details: 'Recognized center for NPTEL courses.' },
    { id: 12, title: 'Amrita Vishwa Vidyapeetham', description: 'Institution Innovation Council', images: ['/src/assets/Affiliation/a12.png'], icon: <Award className="w-6 h-6 text-[#800000]" />, details: 'Recognized by Ministry of Education for innovation.' },
    { id: 13, title: 'AWS Academy', description: 'AWS Academy Member Institute', images: ['/src/assets/Affiliation/a13.png'], icon: <ShieldCheck className="w-6 h-6 text-[#800000]" />, details: 'Member of AWS Academy providing cloud computing education.' },
    { id: 14, title: 'Oracle Academy', description: 'Oracle Academy Member Institute', images: ['/src/assets/Affiliation/a14.png'], icon: <Building2 className="w-6 h-6 text-[#800000]" />, details: 'Member of Oracle Academy providing database and technology education.' },
    { id: 15, title: 'Google Developers', description: 'Google Developers Student Clubs', images: ['/src/assets/Affiliation/a15.png'], icon: <School className="w-6 h-6 text-[#800000]" />, details: 'Google Developers Student Clubs member institute.' }
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AboutLayout title="Affiliations & Accreditation">
      <div className="max-w-6xl mx-auto">
        {/* Accreditations Section */}
        <div className="flex items-center gap-2 mb-8 mt-12" data-aos="fade-right">
          <Award className="w-6 h-6 text-[#800000]" />
          <h2 className="text-2xl font-bold text-gray-800">Accreditations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-right">
          {accreditations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-[0_4px_12px_0_rgba(128,0,0,0.4)] overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              data-aos="fade-left"
            >
              <ImageCarousel images={item.images} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 text-[#800000] font-medium hover:text-[#600000]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliations Section */}
        <div className="flex items-center gap-2 mb-8 mt-12" data-aos="fade-left">
          <GraduationCap className="w-6 h-6 text-[#800000]" />
          <h2 className="text-2xl font-bold text-gray-800">Affiliations & Approvals</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-right">
          {affiliations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-[0_4px_12px_0_rgba(128,0,0,0.4)] overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              data-aos="fade-left"
            >
              <ImageCarousel images={item.images} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 text-[#800000] font-medium hover:text-[#600000]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recognitions Section */}
        <div className="flex items-center gap-2 mb-8 mt-12" data-aos="fade-right">
          <ShieldCheck className="w-6 h-6 text-[#800000]" />
          <h2 className="text-2xl font-bold text-gray-800">Recognitions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-left">
          {recognitions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-[0_4px_12px_0_rgba(128,0,0,0.4)] overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              data-aos="fade-up"
            >
              <ImageCarousel images={item.images} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 text-[#800000] font-medium hover:text-[#600000]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="relative">
              <ImageCarousel images={selectedItem.images} interval={6000} />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {selectedItem.icon}
                <h3 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <p className="text-gray-700">{selectedItem.details}</p>
            </div>
          </div>
        </div>
      )}
    </AboutLayout>
  );
};

export default Affiliation;
