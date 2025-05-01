import React from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import "./CSR.css";

const CSR = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full px-4 py-10 bg-gray-50">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#800000] text-center mb-8"
        >
          Corporate Social Responsibility
        </motion.h2>

        {/* Image with shadow bottom-right only */}
        <motion.div
          className="flex justify-center w-full max-w-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/src/assets/images/CSR.jpg"
            alt="CSR"
            className="rounded-xl w-full object-cover shadow-[10px_10px_25px_#80000050]"
          />
        </motion.div>

        {/* Content wider than image */}
        <motion.div
          className="w-full max-w-6xl mt-10 space-y-6 text-lg text-gray-700 leading-relaxed text-justify"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>
            Bhujbal Knowledge City was formed in the year 2006 under the banner of Mumbai Educational Trust. The small sapling has grown into a large institution providing education in Engineering, Polytechnic, Pharmacy, and Management while contributing to social welfare.
          </p>
          <p>
            Since 2009, MET BKC has launched various social development initiatives under the guidance of Hon. President Chhaganrao Bhujbal. These have been extended to adopted villages like Kone, Nagosali, and Goulane, promoting a culture of social awareness.
          </p>
          <p>
            Through these efforts, students and staff alike become more connected to the community, building empathy and responsibility.
          </p>

          {/* Side-by-side Objectives and Annual Reports */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Objectives */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#800000] mb-2">
                MET-BKC SEVA's Objectives under CSR:
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Promote social responsibility among students and staff.</li>
                <li>Assist underprivileged communities through initiatives.</li>
                <li>Empower individuals socially, economically, and health-wise.</li>
                <li>Promote environmental awareness and sustainability.</li>
                <li>Support infrastructure via MET-BKC SEVA & CSR funding.</li>
              </ul>
            </div>

            {/* Annual Reports */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#800000] mb-2">
                Annual CSR Reports:
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Annual Report 2017–18</li>
                <li>Annual Report 2016–17</li>
                <li>Annual Report 2015–16</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CSR;
