import { Link } from "react-router-dom";

const Footer = () => {
  // Navigation items from MainNavbar
  const navItems = [
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
        { title: "Institute Of Engineering", path: "https://metbkcengg.ac.in/", external: true, openInNewTab: false },
        { title: "Institute Of Technology, Polytechnic", path: "https://metbhujbalknowledgecity.ac.in/metpoly/", external: true, openInNewTab: false },
        { title: "Institute Of Management", path: "https://metbhujbalknowledgecity.ac.in/metmba/", external: true, openInNewTab: false },
        { title: "Institute Of Pharmacy", path: "https://metbhujbalknowledgecity.ac.in/metpharm/", external: true, openInNewTab: false },
        { title: "Institute of D. Pharmacy (B.Pharm, D.Pharm)", path: "https://metbhujbalknowledgecity.ac.in/metdpharm/", external: true, openInNewTab: false },
        { title: "Institute of Information Technology (C-DAC-ATC)", path: "https://www.metbkciit.ac.in/", external: true, openInNewTab: true },
        { title: "Bhujbal Academy of Science & Commerce", path: "https://metbhujbalknowledgecity.ac.in/metjrclg/", external: true, openInNewTab: false },
        { title: "School of Architecture & Interior Design", path: "https://www.metbkcsoaid.ac.in/", external: true, openInNewTab: false },
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

  // Helper function to handle navigation
  const handleNavigation = (item: any) => {
    if (item.external && item.path) {
      window.open(item.path, item.openInNewTab ? '_blank' : '_self');
    }
  };

  return (
    <footer className="bg-secondary text-white pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary pb-2">ABOUT US</h3>
            <ul className="space-y-2">
              {navItems.find(item => item.title === "About")?.dropdown?.map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <a 
                      href={item.path} 
                      target={item.openInNewTab ? "_blank" : "_self"}
                      rel="noopener noreferrer" 
                      className="hover:text-gray-300"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.path} className="hover:text-gray-300">
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Institutes */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary pb-2">INSTITUTES</h3>
            <ul className="space-y-2">
              {navItems.find(item => item.title === "Institutes")?.dropdown?.map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <a 
                      href={item.path} 
                      target={item.openInNewTab ? "_blank" : "_self"}
                      rel="noopener noreferrer" 
                      className="hover:text-gray-300"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.path} className="hover:text-gray-300">
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary pb-2">IMPORTANT LINKS</h3>
            <ul className="space-y-2">
              <li><a href="https://aicte-india.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">AICTE</a></li>
              <li><a href="https://www.sppu.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">SPPU</a></li>
              <li><a href="https://dbatu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">DBATU</a></li>
              <li><a href="https://msbte.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">MSBTE</a></li>
              <li><a href="https://www.dtemaharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">DTE</a></li>
              <li><a href="https://www.pci.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">PCI</a></li>
              <li><a href="https://coa.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">COA</a></li>
              <li><a href="https://www.cdac.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">CDAC</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary pb-2">CONTACT US</h3>
            <p className="mb-2">MET League of Colleges | Bhujbal Knowledge City</p>
            <p className="mb-2">Adgaon | Govardhan, Nashik - 422003</p>
            <p className="mb-2">Maharashtra, India</p>
            <p className="mb-2">Mobile: +91 0980100099</p>
            <p className="mb-2">Adgaon Campus Tel: 0253-2303611</p>
            <p className="mb-2">Govardhan Campus Tel: 0253-2205060, 2205062</p>
            <p className="mb-2">For Hostel Inquiry: +91 9273241038</p>
            <p className="mb-2">Email: enquiries@bkc.met.edu</p>
          </div>
        </div>


        <div className="mt-6 pt-4 border-t border-gray-700 text-center">
          <p>©Copyright 2013. MET Bhujbal Knowledge City, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;