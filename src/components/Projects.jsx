import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

// Import images from src/assets
import project1Img from '../assets/project-1.jpeg';
import project2Img from '../assets/project-2.jpeg';
import project3Img from '../assets/project-3.jpeg';


const projects = [
  {
    id: 1,
    title: "Meal & Nutrition Dashboard",
    description:
      "This Meal & Nutrition Dashboard visually tracks total calories, protein, carbs, fat, and meals consumed. It highlights top five foods contributing to each nutrient category with clear bar charts, enabling quick insights into dietary habits and nutritional intake for effective health monitoring and informed meal planning.",
    image: project1Img,
    link: "#",
  },
  {
    id: 2,
    title: "Financial Management Dashboard",
    description:
      "This Financial Dashboard integrates Balance Sheet, Income Statement, and Cash Flow Statement for complete financial tracking. It provides clear insights into assets, liabilities, income, expenses, and cash movements, helping users monitor savings, investments, and net profit efficiently for better decision-making and effective personal or business financial management.",
    image: project3Img,
    link: "#",
  },
   {
    id: 3,
    title: "Ice Cubes Inventory System",
    description:
      "This Ice Cubes Inventory Management System in Excel streamlines business operations with modules for vendors, customers, purchases, sales, production, inventory, expenses, and financial reports. Featuring quick-access buttons, it enables efficient tracking, forecasting, and profit analysis, ensuring smooth management of raw materials, finished goods, and overall business performance.",
    image: project2Img,
    link: "#",
  },
];


export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                className="w-full max-h-[320px] object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4 px-0 lg:px-8 mt-6 lg:mt-0">
              <h2 className="font-extrabold text-white text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm lg:text-base text-gray-400 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-white mt-3 hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
              >
                View Project <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
