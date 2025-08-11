import React from "react";
import { motion } from "framer-motion";
import { FaFileExcel, FaGoogleDrive, FaChartBar, FaCode } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 pt-20 pb-0 bg-white text-center">
      {/* Heading */}
      <motion.h1
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-green-600 mb-4"
      >
        Services
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-black text-lg max-w-2xl mb-32"
      >
        I offer a wide range of professional services designed to enhance your productivity and online presence.
      </motion.p>

     {/* Service Cards */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center w-full max-w-[1200px] px-12 lg:px-20 mx-auto mb-24"
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>

        {[
          {
            icon: <FaFileExcel size={70} className="text-green-600" />,
            text: "Creating and automating spreadsheets, data analysis, and reporting.",
          },
          {
            icon: <FaGoogleDrive size={70} className="text-green-600" />,
            text: "Building and optimizing collaborative online spreadsheets.",
          },
          {
            icon: <FaChartBar size={70} className="text-green-600" />,
            text: "Designing interactive dashboards and visual reports.",
          },
          {
            icon: <FaCode size={70} className="text-green-600" />,
            text: "Developing responsive and dynamic websites.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="flex flex-col items-center p-10 min-w-[250px] max-w-[280px] rounded-2xl bg-white/30 backdrop-blur-sm border border-gray-300 shadow-md hover:scale-105 transition-all duration-500"
          >
            {service.icon}
            <p className="mt-5 text-black text-base text-center">{service.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
