import React from "react";
import { motion } from "framer-motion";
import AboutLayout from "@/components/layout/AboutLayout";

const Chairman = () => {
  return (
    <AboutLayout>
      <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#800000] tracking-tight">
            FROM THE CHAIRMAN'S DESK
          </h1>
          <div className="w-24 h-1 bg-red-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative w-full md:w-3/4 lg:w-2/3">
            <img
              src="/src/assets/images/chair.jpg"
              alt="Chairman"
              className="rounded-xl w-full h-[300px] md:h-[400px] object-cover shadow-[8px_10px_15px_rgba(128,0,0,0.3)]"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.src =
                  "https://placeholder.pics/svg/1200x400/DEDEDE/555555/Chairman";
              }}
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-6">
            Honourable Mr. CHHAGAN BHUJBAL
          </h2>
          <h3 className="text-lg md:text-xl text-[#800000] font-medium">
            Chairman, Mumbai Educational Trust
          </h3>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto text-gray-800 p-8 bg-white rounded-xl shadow-md space-y-6 text-justify text-lg leading-relaxed"
        >
          <p>
            As our socialist-democratic-republic waltzes past the diamond jubilee mark, the global economies with their think-tanks, academicians, statesmen and core market players are constantly observing this journey. In spite of being the second most populous nation and the largest democracy, driven by 300 million GenNext youth, we may appear as a minor blip on the global economic radar.
          </p>
          <p>
            But, given the 8 - 9 per cent GDP growth rate, a mature democracy, a multitasking, flex-mindset driven global workforce with the synergistic combination of sharp-nosed dynamic innovator/investor/entrepreneurial business barons, we have the potential to reach "commanding heights" in the global scenario.
          </p>
          <p>
            We weathered the 2008 meltdown through some astute fiscal policies and strong-arm central banking interventions. But just as we seem to be gaining some momentum, rising prices, falling output, and a yawning current account deficit seem to be dragging us into the long shadow cast by the Euro zone crisis.
          </p>
          <p>
            A closer scrutiny of our journey of six decades reveals that despite adversities and limitations, we have been able to develop pockets of affluence. Undoubtedly, there are some common factors responsible for this phenomenon – like good access, relevant infrastructure, and an investor-friendly socio-political set-up.
          </p>
          <p>
            But the most critical single component has been that all such pockets have high levels of literacy, especially functional literacy. This single dominating factor stands out when you compare Kerala to Goa or metro cities like Delhi, Mumbai, Bangalore, and Chennai.
          </p>
          <p>
            Visionary leaders and statesmen have always emphasised the value of education. Pandit Jawaharlal Nehru laid the foundation by establishing IITs, Institutes of Science, BARC, AIIMS and many schools of excellence. Later plans emphasized primary and secondary education for the growing population.
          </p>
          <p>
            We at MET are conscious of the task at hand. Having established a premier educational complex at Mumbai, we’ve moved consciously to Nashik, delivering excellence to rural and remote areas in Engineering, IT, Pharmacy, Management, Mass Media, and more.
          </p>
          <p>
            We continue our process of sharing knowledge, for the enlightenment of GenNext, as we believe in what Allan Bloom says — "Education is the movement from darkness to light."
          </p>

          {/* Signature */}
          <div className="mt-10 text-right">
            <p className="text-lg font-semibold text-gray-800">
              Honourable Mr. CHHAGAN BHUJBAL
            </p>
            <p className="text-[#800000] font-medium">Chairman - Mumbai Educational Trust</p>
          </div>
        </motion.div>
      </div>
    </AboutLayout>
  );
};

export default Chairman;
