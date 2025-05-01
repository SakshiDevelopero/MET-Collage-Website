import React from "react";
import Layout from "@/components/layout/Layout";
import { useInView } from "react-intersection-observer";
import "./Counseling.css";

const Counseling = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Layout>
      <div className="flex flex-col items-center w-full px-4 py-10 bg-gray-50">
        {/* Header */}
        <div
          ref={titleRef}
          className={`transition-all duration-1000 ease-in-out ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-[#800000] mb-6 tracking-wide">
            COUNSELING CELL
          </h2>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className={`transition-all duration-1000 ease-in-out ${
            imageInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src="/src/assets/images/coun.jpg"
            alt="Mr. V. M. Sawant"
            className="w-full max-w-3xl h-auto rounded-xl mb-8 shadow-[10px_10px_25px_#80000050]"
          />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`w-[90%] max-w-6xl text-lg text-gray-800 space-y-5 leading-relaxed text-justify transition-all duration-1000 ease-in-out ${
            contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p>
            To face the challenging & competitive business world with success and to resolve the
            mental conflicts of students, we have established an in-house centralized Counseling
            Cell. Since 2012, it has proactively contributed to student development with a caring
            approach.
          </p>
          <p className="font-semibold italic text-[#800000] text-center">
            "We not only take care of academics, but also take care of students' mental health."
          </p>
          <p>
            The Counseling & Student Development Cell empowers students through individual and
            group counseling. It helps them become confident individuals with a positive mindset,
            ready to make sound life decisions. This is a safe forum—open and receptive to
            discussing any kind of problem.
          </p>
          <p>
            The Counselor guides on academic performance, career planning, innovation, personal
            issues, behavioral concerns, family problems, and relationship stress.
          </p>
          <p>
            The cell's primary goal is to build inner strength in students and parents, eliminate
            mental barriers, and help individuals realize their true potential in today's
            competitive world.
          </p>

          <div>
            <p className="font-bold text-xl text-[#800000] mb-2">Ethical Practices:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Strict confidentiality is maintained</li>
              <li>No discrimination on any grounds</li>
              <li>Quality support to students, parents, and staff</li>
            </ul>
          </div>

          <div className="mt-6 text-right">
            <p className="font-bold text-xl text-[#800000]">Mr. V. M. Sawant</p>
            <p className="text-lg text-gray-600">Head of Counseling Cell</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Counseling;
