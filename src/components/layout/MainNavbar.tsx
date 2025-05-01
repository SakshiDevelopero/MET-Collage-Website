import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href?: string;
  path?: string;
  dropdown?: NavDropdownItem[];
  external?: boolean;
};

type NavDropdownItem = {
  title: string;
  href?: string;
  path?: string;
  external?: boolean;
  openInNewTab?: boolean;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { 
    title: "About", 
    dropdown: [
      { title: "From the Chairman's Desk", path: "/Navigation/About/chairman" },
      { title: "Our Faith, Vision & Mission", path: "/Navigation/About/vision" },
      { title: "Advantage MET", path: "/Navigation/About/advantage" },
      { title: "Affiliations & Accreditation", path: "/Navigation/About/Affiliation" },
      { title: "Message from Trustee", path: "/src/assets/pdf/Mt.jpg", external: true, openInNewTab: true },
      { title: "HR Handbook", path: "/src/assets/pdf/book.pdf", external: true, openInNewTab: true },
      { title: "Appraisal Policy", path: "/src/assets/pdf/policy.pdf", external: true, openInNewTab: true },
    ]
  },
  { 
    title: "Campuses", 
    dropdown: [
      { title: "MET BKC, Mumbai", path: "https://www.met.edu", external: true, openInNewTab: false },
      { title: "MET BKC Adgaon, Nashik", path: "https://metbhujbalknowledgecity.ac.in/", external: true, openInNewTab: false },
      { title: "MET BKC Govardhan, Nashik", path: "" }
    ]
  },
  { 
    title: "Institutes", 
    dropdown: [
      { title: "MBSE (Meena Bhujbal School Of Excellence)", path: "https://www.metmbse.ac.in/", external: true, openInNewTab: false },
      { title: "Institute Of Engineering", path: "https://metbkcengg.ac.in/", external: true, openInNewTab: false},
      { title: "Institute Of Technology, Polytechnic", path: "https://metbhujbalknowledgecity.ac.in/metpoly/", external: true, openInNewTab: false },
      { title: "Institute Of Management", path: "https://metbhujbalknowledgecity.ac.in/metmba/", external: true, openInNewTab: false },
      { title: "Institute Of Pharmacy", path: "https://metbhujbalknowledgecity.ac.in/metpharm/", external: true, openInNewTab: false },
      { title: "Institute of D. Pharmacy (B.Pharm, D.Pharm)", path: "https://metbhujbalknowledgecity.ac.in/metdpharm/", external: true, openInNewTab: false},
      { title: "Institute of Information Technology (C-DAC-ATC)", path: "https://www.metbkciit.ac.in/", external: true, openInNewTab: true },
      { title: "Bhujbal Academy of Science & Commerce", path: "https://metbhujbalknowledgecity.ac.in/metjrclg/", external: true, openInNewTab: false },
      { title: "School of Architecture & Interior Design", path: "https://www.metbkcsoaid.ac.in/", external: true, openInNewTab: false},
    ]
  },
  { title: "Infrastructure", path: "/Navigation/infrastructure" },
  { title: "Training & Placements", path: "/Navigation/Training" },
  { title: "Research", path: "/Navigation/Research" },
  { title: "News & Events", path: "/Navigation/News" },
  { 
    title: "Student Section", 
    dropdown: [
      { title: "Online Fees Payment", path: "https://onlinepay.metbhujbalknowledgecity.ac.in/", external: true, openInNewTab: true },
      { title: "Counseling cell", path: "/Navigation/Student/Counseling" },
      { title: "CSR", path: "/Navigation/Student/CSR" },
      { title: "Extended Facilities For Student", path: "/Navigation/Student/Facility" }
    ]
  },
];

const MainNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavigation = (item: NavItem | NavDropdownItem) => {
    if (item.external && item.path) {
      const shouldOpenInNewTab = 'openInNewTab' in item ? item.openInNewTab : false;
      
      if (shouldOpenInNewTab) {
        window.open(item.path, '_blank');
      } else {
        window.location.href = item.path;
      }
    } else if (item.path) {
      navigate(item.path);
      setMobileMenuOpen(false);
      window.scrollTo(0, 0); // Scroll to top when navigating
    } else if (item.href) {
      navigate(item.href);
      setMobileMenuOpen(false);
      window.scrollTo(0, 0); // Scroll to top when navigating
    }
  };

  return (
    <div className={cn("bg-primary text-white", "z-40 transition-all duration-300")}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="p-2 md:p-3 lg:p-4">
          <Link to="/">
            <img 
              src="/src/assets/images/metlogo.jpg" 
              alt="MET Logo" 
              className="h-8 md:h-9 lg:h-10"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation with responsive text sizes */}
        <div className="hidden lg:flex space-x-0 xl:space-x-1">
          {navItems.map((item) => (
            <div 
              key={item.title}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              {item.path || item.href ? (
                <div
                  className="flex items-center px-1.5 xl:px-2 2xl:px-3 py-4 lg:py-5 cursor-pointer whitespace-nowrap hover:bg-[#990000] transition-all duration-300 ease-in-out"
                  onClick={() => handleNavigation(item)}
                >
                  <span className="text-xs lg:text-sm xl:text-base">{item.title}</span>
                  {item.dropdown && <ChevronDown className="ml-0.5 h-3 w-3 lg:h-4 lg:w-4" />}
                </div>
              ) : (
                <div className="flex items-center px-1.5 xl:px-2 2xl:px-3 py-4 lg:py-5 cursor-default whitespace-nowrap hover:bg-[#990000] transition-all duration-300 ease-in-out">
                  <span className="text-xs lg:text-sm xl:text-base">{item.title}</span>
                  {item.dropdown && <ChevronDown className="ml-0.5 h-3 w-3 lg:h-4 lg:w-4" />}
                </div>
              )}
              
              {item.dropdown && activeDropdown === item.title && (
                <div className="absolute left-0 mt-0 w-64 bg-white text-black shadow-lg z-50 animate-fade-in">
                  {item.dropdown.map((dropdownItem) => (
                    <div
                      key={dropdownItem.title}
                      className="block px-3 py-2 hover:bg-gray-100 border-b border-gray-200 last:border-b-0 cursor-pointer transition-colors duration-200 text-xs lg:text-sm"
                      onClick={() => handleNavigation(dropdownItem)}
                    >
                      {dropdownItem.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Login Button */}
        <div className="hidden lg:block pr-2 md:pr-3 lg:pr-4">
          <Button 
            className="text-xs lg:text-sm bg-white text-[#800000] hover:bg-gray-200 hover:text-red-600 font-bold transition-all duration-300 px-2 py-1 lg:px-4 lg:py-2"
            onClick={() => window.open('https://erp.metbhujbalknowledgecity.ac.in/', '_blank')}
          >
            Login
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden px-4">
          <Button 
            variant="ghost" 
            className="bg-white text-[#800000] hover:bg-gray-200 p-1.5" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 mt-8 flex justify-end">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-[320px] h-full bg-primary text-white overflow-y-auto animate-fade-in"
            style={{ top: '16px', transition: 'top 0.3s ease-out' }} // Adjusted top value for sidebar to start higher
          >
            <div className="px-4 py-8">
              <Button 
                variant="ghost" 
                className="absolute top-4 right-4 bg-white text-[#800000] hover:bg-gray-200 p-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={18} />
              </Button>

              {navItems.map((item) => (
                <div key={item.title} className="mb-4">
                  <div 
                    className="flex items-center justify-between py-2 border-b border-primary-foreground/30 hover:bg-[#990000] transition-colors duration-200 px-2 rounded"
                    onClick={() => {
                      if (!item.dropdown) {
                        handleNavigation(item);
                      } else {
                        setActiveDropdown(activeDropdown === item.title ? null : item.title);
                      }
                    }}
                  >
                    <span className="text-sm md:text-base font-medium">{item.title}</span>
                    {item.dropdown && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {item.dropdown && activeDropdown === item.title && (
                    <div className="ml-4 mt-2 space-y-2 animate-fade-in">
                      {item.dropdown.map((dropdownItem) => (
                        <div
                          key={dropdownItem.title}
                          className="py-2 px-2 border-b border-primary-foreground/20 last:border-b-0 hover:bg-[#990000] transition-colors duration-200 rounded text-xs md:text-sm"
                          onClick={() => handleNavigation(dropdownItem)}
                        >
                          {dropdownItem.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6">
                <Button 
                  className="w-full bg-white text-[#800000] hover:bg-gray-200 hover:text-red-600 font-bold transition-all duration-300 text-sm"
                  onClick={() => window.open('https://erp.metbhujbalknowledgecity.ac.in/', '_blank')}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
