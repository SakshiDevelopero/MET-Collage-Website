
import React from "react";
import Layout from "@/components/layout/Layout";
import ResearchSidebar from "./ResearchSidebar";

interface ResearchLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const ResearchLayout: React.FC<ResearchLayoutProps> = ({ children, title }) => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row mt-6 gap-12">
          {/* Sidebar - hidden on mobile, shown on md and up */}
          <div className="hidden md:block">
            <ResearchSidebar />
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {title && (
              <h1 className="text-3xl font-bold mb-6 text-[#550000]">{title}</h1>
            )}
            {children}
          </div>
        </div>
        
        {/* Mobile sidebar - shown only on mobile */}
        <div className="block md:hidden mt-6 mb-8">
          <ResearchSidebar />
        </div>
      </div>
    </Layout>
  );
};

export default ResearchLayout;
