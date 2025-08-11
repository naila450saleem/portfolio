import React from "react";
import { motion } from "framer-motion";
import { FaFileExcel, FaGoogleDrive, FaChartBar, FaCode } from "react-icons/fa";

const skills = [
  {
    icon: <FaFileExcel size={50} />,
    title: "Excel",
    description: "Data handling and visualization",
  },
  {
    icon: <FaGoogleDrive size={50} />,
    title: "Google Sheets",
    description: "Cloud-based spreadsheet solution",
  },
  {
    icon: <FaChartBar size={50} />,
    title: "Power BI",
    description: "Powerful data analytics and dashboards",
  },
  {
    icon: <FaCode size={50} />,
    title: "Web Development",
    description: "Frontend development services",
  },
];

const Skills = () => {
  return (
<div className="flex flex-col items-center justify-center bg-white text-center px-16 lg:px-24 pt-0 pb-20">

      
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-green-600 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>

      <motion.p
        className="text-black max-w-2xl text-sm md:text-base mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        We offer a range of skills to help you succeed in digital data
        management and web development. Whether you're a beginner or an
        enterprise, we’ve got you covered.
      </motion.p>

      {/* 3 boxes on top, last one centered */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center text-center p-6 bg-white border border-green-600 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl min-w-[250px] max-w-[400px] w-full ${
                index === skills.length - 1 ? "md:col-span-3 md:justify-self-center" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-green-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-700 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
