import React from "react";
import { motion } from "framer-motion";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io"; // ✅ only fb & whatsapp
import { TypeAnimation } from "react-type-animation";

// Import your hero image from src/assets
import heroImg from "../assets/hero.jpg";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-28 py-10 gap-10 lg:gap-20">

        {/* Left Section */}
        <motion.div
          className="lg:w-[45%] w-full text-green-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Animated Text */}
          <motion.div
            className="text-xs sm:text-2xl lg:text-4xl flex flex-col gap-3 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello,{" "}
              <TypeAnimation
                sequence={["I am Saif Ullah", 1000]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">
                EXCEL, GOOGLE SHEETS, <br className="hidden sm:block" />POWER BI &{" "}
              </span>{" "}
              <span
                className="font-extrabold text-green-600 sm:drop-shadow-[1px_1px_2px_black]"
                style={{ WebkitTextStroke: "0.5px black" }}
              >
                Web Developer
              </span>
            </motion.h2>

            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">Pakistan.</span>
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-green-600 text-sm sm:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I specialize in Excel, Google Sheets, Power BI, and web development. 
            I help businesses organize their data, gain insights, and build dynamic websites.
          </motion.p>

          {/* Button */}
          <div className="mt-6">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300"
            >
              View My Work
            </a>
          </div>

          {/* ✅ Only Facebook & WhatsApp Icons */}
          <motion.div
            className="flex items-center gap-x-4 sm:gap-x-5 mt-4 lg:mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.a
               href="https://www.facebook.com/share/14GTgvK4THw/"
              target="_blank"
              className="bg-white p-2 sm:p-3 rounded border-2 border-black text-green-600 hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>

            <motion.a
               href="https://wa.me/c/923196593052"
              target="_blank"
              className="bg-white p-2 sm:p-3 rounded border-2 border-black text-green-600 hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-[55%] w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            className="w-[70%] sm:w-[50%] lg:w-[60%] h-auto"
            src={heroImg}
            alt="Hero Vector"
          />
        </motion.div>
      </div>
    </div>
  );
}
