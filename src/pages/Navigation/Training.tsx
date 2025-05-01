import Layout from "@/components/layout/Layout";
// import "./Training.css"; // Removed from here
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

import "./Training.css"; // Added here, after Swiper CSS

// Function to generate placeholder details for 70 companies
const generateCompanyDetails = () => {
  const details = {};
  for (let i = 1; i <= 70; i++) {
    const companyId = `company${i}`;
    details[companyId] = {
      logo: `/src/assets/company/company${i}.jpg`, // Placeholder Logo Path
      images: [
        `/src/assets/company/company${i}_1.jpg`, // Placeholder Image 1 Path
        `/src/assets/company/company${i}_2.jpg`, // Placeholder Image 2 Path
      ],
    };
  }
  return details;
};

// Generate the placeholder details
const companyDetails = generateCompanyDetails();

// Manually override specific entries if needed (example for company1 and 3)
// companyDetails['company1'] = { ... your actual details for company1 ... };
// companyDetails['company3'] = { ... your actual details for company3 ... };

// Update the logos array generation to create 70 logos
const logos = Array.from({ length: 70 }, (_, i) => ({
  id: i + 1,
  logo: `/src/assets/company/company${i + 1}.jpg`,
  companyId: `company${i + 1}`
}));

const Training = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLogoClick = (companyId: string) => {
    setSelectedCompany(companyId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  return (
    <Layout>
      <div className="training-container">
        <h2 className="training-title" data-aos="fade-up">
          OUR <span className="gradient-text">RECRUITERS </span>
        </h2>
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logo-card cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={(index % 10) * 100}
              onClick={() => handleLogoClick(logo.companyId)}
            >
              <img src={logo.logo} alt={`Company ${logo.id}`} className="logo-image" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="aspect-square overflow-auto flex flex-col p-2">
          {selectedCompany && companyDetails[selectedCompany] && (
            <>
              {/* Header Section - Fixed Size */}
              <div className="flex flex-col items-center gap-2 mb-2 flex-shrink-0">
                <img
                  src={companyDetails[selectedCompany].logo}
                  alt={companyDetails[selectedCompany].name}
                  className="w-32 h-32 object-contain rounded-sm"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{companyDetails[selectedCompany].name}</h3>
                  <p className="text-gray-600 text-base">{companyDetails[selectedCompany].description}</p>
                </div>
              </div>

              {/* Image Section - Square container with proper image display */}
              <div className="flex-grow relative bg-gray-100 rounded-md overflow-hidden flex items-center justify-center"> 
                {companyDetails[selectedCompany].images.length > 0 ? (
                  <Swiper 
                    modules={[Navigation, Pagination]} 
                    spaceBetween={0} 
                    slidesPerView={1} 
                    navigation 
                    pagination={{ clickable: true }} 
                    className="w-full h-full"
                  >
                    {companyDetails[selectedCompany].images.map((imageSrc, index) => (
                      <SwiperSlide key={index} className="flex items-center justify-center">
                        <div className="w-full h-full flex items-center justify-center p-4"> {/* Added padding */}
                          <img
                            src={imageSrc}
                            alt={`${companyDetails[selectedCompany].name} - Image ${index + 1}`}
                            className="max-w-full max-h-full object-contain" // Changed to max dimensions
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No additional image available.
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Training;
