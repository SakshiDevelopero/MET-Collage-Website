import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const PhDCenter = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold" style={{ color: "#800000" }}>
            Ph.D. RESEARCH CENTER
          </h1>
        </div>

        {/* Hero Section with Enhanced Image */}
        <div className="relative mb-10 w-full max-w-5xl mx-auto overflow-hidden shadow-[12px_12px_30px_#80000080] rounded-lg">
          <img
            src="/src/assets/images/research.jpg"
            alt="PhD Research Center"
            className="w-full h-auto max-h-[40rem] object-contain"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-white/90 italic"
            >
              “Research is to see what everybody else has seen and to think what nobody else has thought”
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-white/80 mt-2"
            >
              - Albert Szent-Gorgyi, Hungarian Biochemist, Awarded Nobel Prize for Medicine in 1937
            </motion.div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="mb-6 text-gray-800 leading-relaxed text-justify">
            Rightly so, the Research Centre of MET’s, Institute of Management aims at being ‘thinking intensive’ to generate a welter of different perspectives, to move from the known to the unknown. The research activities undertaken are focused on reaching outcomes that benefit the learning community and society at large.
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed text-justify">
            MET’s Institute of Management has a recognized “Research Centre” under Savitribai Phule Pune University, Pune. The Research Centre was established in 2016 under the faculty of Management. IOM’s research unit is armed with 10 Ph.D. guides mentoring 12 research scholars currently pursuing their doctorates.
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed text-justify">
            The various popular specializations available to researchers include Marketing Management, Organization Management, Production & Operation Management, Finance Management, and Human Resource Management. Recently, five researchers have successfully been awarded their Ph.D. degrees.
          </p>

          <div className="mb-8 bg-gray-50 p-6 rounded-lg border-l-4" style={{ borderColor: "#800000" }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#800000" }}>
              "MET MANAGEMENT RETROSPECT"
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              A Biannual Management Research Journal brought out by the IOM’s Research Centre, addressed to management practitioners, researchers, and academics.
              <br /><br />
              “MET Management Retrospect” is a double-blind peer-reviewed journal published biannually and available via subscription. It provides an intellectually stimulating platform for academicians, industrialists, executives, consultants, professionals, researchers, and students to share their ideas, innovations, and analysis regarding historical, current, or future trends. This journal serves as an excellent forum for the interdisciplinary study of management, covering fields like commerce, economics, computer science, and more.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10" style={{ color: "#800000" }}>
            PhD Awarded Candidates
          </h2>
          <p className="mb-6 text-gray-800 font-medium">
            The following candidates have been awarded Ph.D. by Savitribai Phule Pune University, under the guidance of Dr. Nilesh Berad:
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr style={{ backgroundColor: "#800000", color: "#ffffff" }}>
                  <th className="py-3 px-4 text-left">Name of the PhD Scholar</th>
                  <th className="py-3 px-4 text-left">Title of the Thesis</th>
                  <th className="py-3 px-4 text-center">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    name: "Mr Yogesh Uttam Gaikwad",
                    title: "AN ANALYTICAL STUDY OF CHANGES IN CONSUMER SHOPPING BEHAVIOR...",
                    link: "http://hdl.handle.net/10603/92443"
                  },
                  {
                    name: "Mr Narendra Telrandhe",
                    title: "A STUDY ON CONSUMERS' BUYING BEHAVIOUR FOR SOLAR ENERGY...",
                    link: "http://hdl.handle.net/10603/87289"
                  },
                  {
                    name: "Mr Abhay Bora",
                    title: "An Analytical Study of Changing Marketing Scenario...",
                    link: "http://shodhganga.inflibnet.ac.in/handle/10603/82153"
                  },
                  {
                    name: "Ms Jyoti Singh",
                    title: "A STUDY OF QUALITY MANAGEMENT PRACTICES FOLLOWED BY SELECTED B-SCHOOLS...",
                    link: null
                  },
                  {
                    name: "Ms Mrunalini Lad",
                    title: "A study of impact of Promotional Strategies for Over-the-Counter...",
                    link: null
                  },
                  {
                    name: "Mr Pankaj Chavan",
                    title: "To Study the role of Marketing Intelligence Services in Planning...",
                    link: null
                  },
                  {
                    name: "Mr Abhinay Nirmal",
                    title: "To study Corporate Social Responsibility as a tool for Marketing...",
                    link: null
                  }
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4">{item.title}</td>
                    <td className="py-3 px-4 text-center">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#800000" }}
                          className="hover:underline font-medium"
                        >
                          View
                        </a>
                      ) : (
                        <span className="text-gray-500 italic">
                          Ph.D. Awarded, but not yet available on ShodhGanga
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhDCenter;
