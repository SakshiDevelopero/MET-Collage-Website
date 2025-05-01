import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Facility.css";

const Facility = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false
    });
  }, []);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  // Different AOS animations for variety
  const animations = [
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "flip-left",
    "flip-right",
    "zoom-in",
    "zoom-out"
  ];

  const getRandomAnimation = () => {
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 
            className="text-3xl font-bold mb-6 text-[#800000]"
            data-aos="fade-down"
          >
            EXTENDED FACILITIES FOR STUDENTS
          </h1>
          
          <div 
            className="bg-white p-6 rounded-lg shadow-md mb-8"
            style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
            data-aos="fade-up"
          >
            <p className="mb-4 text-lg text-gray-700">
              At MET Bhujbal Knowledge City, we are committed to providing our students with excellent facilities that extend beyond the classroom. These facilities are designed to enhance the learning experience, promote overall development, and ensure a comfortable and conducive environment for academic and personal growth.
            </p>
            
            <p className="text-gray-700">
              Our campus is equipped with state-of-the-art infrastructure and modern amenities to cater to the diverse needs of our students. From academic resources to recreational facilities, we strive to provide everything that students need for a fulfilling college life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div 
              className="bg-white p-6 rounded-lg shadow-md"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#800000]">Digital Library</h2>
              <img 
                src="/src/assets/facility/library2.webp" 
                alt="Digital Library" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/library2.webp")}
              />
              <p className="text-gray-700">
                Our digital library provides access to a vast collection of e-books, journals, research papers, and digital resources. Students can access these resources from anywhere on the campus using our high-speed internet connectivity. The digital library is equipped with modern computers, comfortable reading spaces, and assistance from trained librarians.
              </p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-lg shadow-md"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#800000]">Sports Complex</h2>
              <img 
                src="/src/assets/facility/sport.jpg" 
                alt="Sports Complex" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/sport.jpg")}
              />
              <p className="text-gray-700">
                Our sports complex offers facilities for various indoor and outdoor sports. It includes a well-maintained cricket ground, football field, basketball and volleyball courts, badminton courts, and a gymnasium with modern fitness equipment. Professional coaches are available to guide students in different sports activities.
              </p>
            </div>
          </div>
          
          <h2 
            className="text-2xl font-bold mb-4 text-[#800000]"
            data-aos="fade-right"
          >
            Student Support Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Counseling Sessions with Experts</h3>
              <img 
                src="/src/assets/facility/coun.jpg" 
                alt="Wellness Center" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/coun.jpg")}
              />
              <p className="text-gray-700">
                The Student Wellness Center provides healthcare services, counseling, and support for the physical and mental well-being of students. It is staffed with qualified healthcare professionals and counselors who are available during college hours.
              </p>
            </Card>
            
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">PhD Research Centre</h3>
              <img 
                src="/src/assets/facility/research.jpg" 
                alt="Career Center" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("")}
              />
              <p className="text-gray-700">
                Ph.D RESEARCH CENTER
                ​Established in 2016, the Ph.D. Research Centre at MET's Institute of Management, Nashik, is affiliated with Savitribai Phule Pune University. It offers research opportunities in Marketing, HR, Finance, and Operations, guided by 10 approved research guides. 
              </p>
            </Card>
            
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">IIRS-ISRO Nodal Center</h3>
              <img 
                src="/src/assets/facility/IIRS.jpg" 
                alt="Activity Center" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("")}
              />
              <p className="text-gray-700">
                ​IIRS-ISRO Nodal Center
                MET Bhujbal Knowledge City (MET BKC) in Nashik serves as a nodal center for the Indian Institute of Remote Sensing (IIRS) under the Indian Space Research Organisation (ISRO). This designation allows MET BKC to coordinate and facilitate IIRS's outreach programs, including online courses and workshops in remote sensing and geospatial technologies.
              </p>
            </Card>
          </div>
          
          <h2 
            className="text-2xl font-bold mb-4 text-[#800000]"
            data-aos="fade-left"
          >
            Academic Support Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Science Lab</h3>
              <img 
                src="/src/assets/facility/Biolab.jpg" 
                alt="Science Lab" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/Biolab.jpg")}
              />
              <p className="text-gray-700">
                Our science labs are equipped with the latest equipment and tools for conducting experiments and research. Students get hands-on experience in their respective fields under the guidance of experienced lab instructors.
              </p>
            </Card>
            
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Seminar Hall</h3>
              <img 
                src="/src/assets/facility/seminar.webp" 
                alt="Seminar Hall" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/seminar.webp")}
              />
              <p className="text-gray-700">
                Our research centers provide specialized facilities and resources for research activities in various fields. They offer support for research projects, paper publications, and participation in research conferences and seminars.
              </p>
            </Card>
            
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Workshops</h3>
              <img 
                src="/src/assets/facility/workshop.jpg" 
                alt="Workshops" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/workshop.jpg")}
              />
              <p className="text-gray-700">
                The Learning Resource Center offers additional learning materials, reference books, study guides, and past exam papers. It also provides quiet study spaces for individual and group study sessions.
              </p>
            </Card>
            
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Field Visit</h3>
              <img 
                src="\src\assets\Facility\field.jpg" 
                alt="fieldvisit" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/Facility/fv.jpeg")}
              />
              <p className="text-gray-700">
                An Industrial Visit to Netwin Infosolutions Pvt. Ltd. in Nashik offers insights into their software solutions, including core banking, digital banking, and payment systems. It's a great chance to learn about the company's innovations and IT processes.
              </p>
            </Card>
            
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Smart Classrooms</h3>
              <img 
                src="/src/assets/facility/smartclassroom.jpg" 
                alt="Smart Classrooms" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/smartclassroom.jpg")}
              />
              <p className="text-gray-700">
                All our classrooms are equipped with modern teaching aids, including projectors, interactive boards, and audio-visual systems, to enhance the teaching-learning process and provide an engaging learning experience.
              </p>
            </Card>
            
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Computer Labs</h3>
              <img 
                src="/src/assets/facility/computerlab.jpg" 
                alt="Computer Labs" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/computer lab.jpg")}
              />
              <p className="text-gray-700">
                Our computer labs are equipped with the latest hardware and software to support academic and research activities. They provide access to specialized software tools, internet resources, and printing facilities.
              </p>
            </Card> 
          </div>
          
          <h2 
            className="text-2xl font-bold mb-4 text-[#800000]"
            data-aos="zoom-in"
          >
            Essential Facility
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">ATM Facility</h3>
              <img 
                src="\src\assets\Facility\ATM.jpg" 
                alt="ATM Facility" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("")}
              />
              <p className="text-gray-700">
                24/7 accessible ATM facility within the campus premises for convenient banking services. Multiple bank ATMs are available to serve students and staff members.
              </p>
            </Card>
            
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Parking Area</h3>
              <img 
                src="\src\assets\Facility\parking.jpg" 
                alt="Parking Facility" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("")}
              />
              <p className="text-gray-700">
                Spacious and secure parking facilities for two-wheelers and four-wheelers with 24/7 security surveillance and covered parking options available.
              </p>
            </Card>
            
            <Card 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Xerox Center</h3>
              <img 
                src="\src\assets\Facility\xerox.jpg" 
                alt="Xerox Center" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("")}
              />
              <p className="text-gray-700">
                Full-service xerox and printing center offering photocopying, scanning, printing, and binding services at student-friendly rates. Open during college hours.
              </p>
            </Card>
          </div>
          
          <h2 
            className="text-2xl font-bold mb-4 text-[#800000]"
            data-aos="zoom-out"
          >
            Transportation & Hostel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div 
              className="bg-white p-6 rounded-lg shadow-md"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Hostels</h3>
              <img 
                src="/src/assets/facility/hostel.jpeg" 
                alt="Hostel" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/hostel.jpeg")}
              />
              <p className="text-gray-700">
                We provide safe and comfortable hostel accommodation for boys and girls separately. The hostels are equipped with modern amenities, including furnished rooms, common rooms with TV and recreational facilities, Wi-Fi connectivity, and 24/7 security.
              </p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-lg shadow-md"
              style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.3)" }}
              data-aos={getRandomAnimation()}
            >
              <h3 className="text-xl font-bold mb-3 text-[#800000]">Transport Facility</h3>
              <img 
                src="/src/assets/facility/bus.jpg" 
                alt="Transport" 
                className="w-full rounded-lg mb-4 facility-image"
                onClick={() => handleImageClick("/src/assets/facility/bus.jpg")}
              />
              <p className="text-gray-700">
                Our campus has multiple dining options, including a main cafeteria, food courts, and smaller cafes. These facilities serve a variety of nutritious and tasty meals, snacks, and beverages at reasonable prices. Special dietary requirements are also accommodated upon request.
              </p>
            </div>
          </div>
          
          <div 
            className="bg-[#800000] text-white p-8 rounded-lg"
            style={{ boxShadow: "0 4px 6px rgba(128, 0, 0, 0.5)" }}
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-4">Access to Facilities</h2>
            <p className="mb-4">
              Most of the facilities are available to all enrolled students. Specific facilities may have their own operating hours and usage policies. Student ID cards are required to access certain facilities.
            </p>
            <p className="mb-2">
              <strong>For inquiries about facilities:</strong>
            </p>
            <p className="mb-1">Email: facilities@metbkc.ac.in</p>
            <p>Phone: +91-241-2345678 </p>
          </div>
        </div>

        {/* Image Popup */}
        <div className={`image-popup ${selectedImage ? 'active' : ''}`} onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            {selectedImage && (
              <>
                <button className="close-button" onClick={closePopup}>×</button>
                <img src={selectedImage} alt="Enlarged facility" className="popup-image" />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Facility;