import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Top.css';

const socialLinks = {
  instagram: 'https://www.instagram.com/metbhujbalknowledgecity?igsh=ZHIwcTE4c29rMmp3',
  facebook: 'https://www.facebook.com/share/12KYUJmXyM5/?mibextid=qi2Omg',
  youtube: 'https://youtube.com/@metiom?si=xJdHvF4g2R28zQ6v',
  linkedin: 'https://www.linkedin.com/company/met-bhujbal-knowledge-city/',
  twitter: 'https://x.com/BhujbalMet?t=g8Cwvbz4jxvYiOvEoI3WxQ&s=08',
  email: 'mailto:enquiries@bkc.met.edu'
};

const TopNav: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const animateIconsIn = () => {
      gsap.fromTo(
        ".social-icon",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.5,
          ease: "power2.out"
        }
      );
    };

    animateIconsIn();
    window.addEventListener("scroll", animateIconsIn);

    const icons = gsap.utils.toArray(".social-icon");
    icons.forEach((icon: any) => {
      gsap.set(icon, { color: "#ffffff" });

      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { scale: 1.15, duration: 0.5, ease: "power2.out" });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { scale: 1, duration: 0.5, ease: "power2.out" });
      });

      icon.addEventListener("click", () => {
        gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.inOut" });
      });
    });

    return () => {
      window.removeEventListener("scroll", animateIconsIn);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setShowMobileSearch(false);
    }
  };

  return (
    <div className="top-navbar bg-black py-1 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-start">
            <div className="flex items-center mr-6">
              <span className="text-white mr-2 text-sm">Student Helpline :</span>
              <FaPhone className="contact-icon mx-1" size={12} />
              <span className="nav-text text-white text-sm ml-1">
                +91-91580 20876
              </span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="contact-icon mx-1" size={12} />
              <span className="nav-text text-white text-sm ml-1">
                enquiries@bkc.met.edu
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-2 md:mt-0">
            <div className="flex flex-row items-center justify-center md:justify-end space-x-6">
              <div className="social-icons-container flex space-x-4">
                {Object.entries(socialLinks).map(([key, link]) => (
                  <a
                    key={key}
                    href={link}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                  >
                    {key === 'facebook' && <FaFacebook size={16} />}
                    {key === 'twitter' && <FaXTwitter size={16} />}
                    {key === 'youtube' && <FaYoutube size={16} />}
                    {key === 'instagram' && <FaInstagram size={16} />}
                    {key === 'linkedin' && <FaLinkedin size={16} />}
                    {key === 'email' && <FaEnvelope size={16} />}
                  </a>
                ))}
              </div>

              {/* Desktop search */}
              <form onSubmit={handleSearch} className="search-wrapper hidden sm:block">
                <div className="flex">
                  <input
                    type="text"
                    className="search-input text-sm py-1 px-2 w-full"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="search-btn flex items-center justify-center px-2" type="submit">
                    <FaSearch className="search-icon" size={12} />
                  </button>
                </div>
              </form>

              {/* Mobile search icon */}
              <div className="search-icon-container block sm:hidden">
                <FaSearch
                  size={16}
                  className="text-white cursor-pointer"
                  onClick={() => setShowMobileSearch(!showMobileSearch)}
                />
              </div>

              <div className="old-website-container relative">
                <a
                  href="https://metbhujbalknowledgecity.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="old-website-link text-white no-underline flex items-center"
                >
                  <span className="text hidden md:inline">Old Website</span>
                  <FaExternalLinkAlt className="ml-1" size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {showMobileSearch && (
          <div className="mobile-search-popup block sm:hidden">
            <form onSubmit={handleSearch} className="w-full">
              <div className="flex">
                <input
                  type="text"
                  className="search-input text-sm py-1 px-2 w-full"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button className="search-btn flex items-center justify-center px-2" type="submit">
                  <FaSearch className="search-icon" size={12} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
