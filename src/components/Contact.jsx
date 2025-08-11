import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 pt-40 pb-20 bg-white text-center"
      id="contact"
    >
      {/* Heading */}
      <motion.h2
        variants={fadeInDown}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-green-600 mb-4"
      >
        Contact <span className="text-black">Me</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-black text-base sm:text-lg max-w-2xl mb-16 px-2"
      >
        Let's connect and discuss how I can help bring your ideas to life.  
        Whether it's a project inquiry or just a friendly hello — my inbox is open.
      </motion.p>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 w-full max-w-[1200px] justify-between px-2 sm:px-6 lg:px-20">
        
        {/* Form Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[50%] bg-white/30 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 sm:p-8 shadow-md"
        >
          <form className="w-full space-y-5">
            <input
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
              type="text"
              placeholder="Your name"
              required
            />
            <input
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
              type="text"
              placeholder="Your website (If exists)"
            />
            <textarea
              className="resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full"
              placeholder="How can I help?*"
            ></textarea>

            {/* Buttons & Icons */}
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-green-600 justify-center w-full lg:flex-1 hover:bg-green-700 text-white px-5 py-3 rounded font-medium shadow-md"
              >
                Get In Touch
              </motion.button>

              <div className="flex items-center justify-center gap-x-4">
                {[BiLogoGmail, IoLogoLinkedin, IoLogoTwitter, BsGithub].map(
                  (Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="bg-white p-2 lg:p-3 rounded border-2 border-black text-green-600 hover:text-black transition-colors duration-300"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#16A34A",
                        color: "#fff",
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </form>
        </motion.div>

        {/* Info Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[45%] flex flex-col justify-center text-left px-2 sm:px-0"
        >
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Let's <span className="text-green-600">talk</span> for something special
          </h2>
          <p className="text-[#71717A] text-base sm:text-lg mb-6">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>

          <div className="font-semibold text-base sm:text-lg flex flex-col gap-4">
            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 group"
              href="mailto:Youremail@gmail.com"
            >
              <span className="border-2 border-transparent group-hover:border-green-600 rounded-full p-2 transition-all">
                <IoMdMail className="w-5 h-5" />
              </span>
              excelexpert978@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 group"
              href="tel:1234567890"
            >
              <span className="border-2 border-transparent group-hover:border-green-600 rounded-full p-2 transition-all">
                <FaPhone className="w-5 h-5" />
              </span>
              +92 319 6593052
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
