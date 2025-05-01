
import React from "react";
import { Link, useLocation } from "react-router-dom";

type SidebarItem = {
  title: string;
  path?: string;
  external?: boolean;
  openInNewTab?: boolean;
};

const ResearchSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarLinks: SidebarItem[] = [
    { title: "Research Overview", path: "/Navigation/Research" },
    { title: "PhD Research Center", path: "/Navigation/Research/PhDCenter" },
    { title: "Computer Engineering Research Center" },
    { title: "Mechanical Engineering Research Center" },
    { title: "Pharmacy Research Center" },
    { title: "Management Research Center" },
    { title: "Research Publications" },
    { title: "PhD Program" },
    { title: "Research Grants" },
    { title: "Collaboration", path: "/Navigation/Research/collaboration" },
    { title: "Patents" },
    { title: "Events & Conferences" },
    { title: "Research Facilities" },
    { title: "Journal Publications", path: "/assets/pdf/journals.pdf", external: true, openInNewTab: true },
    { title: "Research Newsletter", path: "/assets/pdf/newsletter.pdf", external: true, openInNewTab: true }
  ];

  return (
    <div className="research-sidebar bg-gray-100 w-64 flex-shrink-0">
      <div className="bg-[#550000] text-white p-4 font-bold">
        <h2 className="text-lg">Research</h2>
      </div>
      {sidebarLinks.map((link, index) => (
        <div key={index} className="relative">
          {link.external && link.path ? (
            <a 
              href={link.path} 
              target="_blank"
              rel="noopener noreferrer"
              className={`block px-6 py-4 hover:bg-gray-200 transition-colors duration-200 border-b border-gray-200 last:border-b-0`}
            >
              {link.title}
            </a>
          ) : link.path ? (
            <Link 
              to={link.path}
              className={`block px-6 py-4 hover:bg-gray-200 transition-colors duration-200 border-b border-gray-200 last:border-b-0 ${currentPath === link.path ? 'bg-gray-200 font-medium' : ''}`}
            >
              {link.title}
            </Link>
          ) : (
            <div className="block px-6 py-4 hover:bg-gray-200 transition-colors duration-200 border-b border-gray-200 last:border-b-0">
              {link.title}
            </div>
          )}
          {/* Red accent bar for active item */}
          {link.path && (
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#550000] ${currentPath === link.path ? 'block' : 'hidden'}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResearchSidebar;
