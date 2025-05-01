import React from "react";
import Layout from "./Layout";
import AboutSidebar from "./AboutSidebar";

interface AboutLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children, title }) => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 items-center">
        {/* Responsive wrapper: column on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Sidebar - center it on mobile using mx-auto */}
          <div className="w-full md:w-1/4 md:mx-0 mx-auto ">
            {/* <h2 className="text-xl font-semibold text-[#550000] mb-4 block md:hidden">
              About MET
            </h2> */}
            <AboutSidebar  />
          </div>

          {/* Main content */}
          <div className="flex-1 w-full">
            {title && (
              <h1 className="text-3xl font-bold mb-6 text-[#550000]">
                {title}
              </h1>
            )}
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutLayout;