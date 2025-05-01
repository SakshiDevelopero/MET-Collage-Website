import React from "react";
import { Link, useLocation } from "react-router-dom";

const AboutSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarLinks = [
    {
      title: "From Chairman's Desk",
      path: "/Navigation/About/chairman"
    },
    {
      title: "Our Faith, Vision & Mission",
      path: "/Navigation/About/vision"
    },
    {
      title: "Advantage MET",
      path: "/Navigation/About/advantage"
    },
    {
      title: "Affiliations & Accreditations",
      path: "/Navigation/About/Affiliation"
    },
    {
      title: "Message from Trustee",
      path: "/src/assets/pdf/Mt.jpg",
      external: true,
      openInNewTab: true
    },
    {
      title: "HR Handbook",
      path: "/src/assets/pdf/book.pdf",
      external: true,
      openInNewTab: true
    },
    {
      title: "Appraisal Policy",
      path: "/src/assets/pdf/policy.pdf", 
      external: true,
      openInNewTab: true
    },
  ];

  return (
    <div className="about-sidebar bg-[#800000] text-white w-64 flex-shrink-0 mt-8"> {/* Added mt-8 to move it down */}
      {sidebarLinks.map((link, index) => (
        <div key={index} className="relative">
          {link.external ? (
            // Check if the item is an external link (PDF or other external resources)
            <a 
              href={link.path} 
              target={link.openInNewTab ? "_blank" : "_self"} // Open in a new tab if specified
              rel="noopener noreferrer"
              className={`block px-6 py-4 hover:bg-[#990000] transition-colors duration-200 border-b border-[#990000] last:border-b-0`}
            >
              {link.title}
            </a>
          ) : (
            // Normal navigation links (for in-app routing)
            <Link
              to={link.path}
              className={`block px-6 py-4 hover:bg-[#990000] transition-colors duration-200 border-b border-[#990000] last:border-b-0 ${currentPath === link.path ? 'bg-[#990000] font-medium' : ''}`}
            >
              {link.title}
            </Link>
          )}
          {/* Red accent bar with a glowing effect for active item */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-1 bg-red-500 ${currentPath === link.path ? 'block glow-effect' : 'hidden'}`}
          ></div>
        </div>
      ))}
      <style>{`
  .glow-effect {
    box-shadow: 0 0 10px 2px rgba(255, 0, 0, 0.8);
  }
`}</style>
    </div>
  );
};

export default AboutSidebar;