import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* ===================== PHOTO ===================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-128 md:w-208 lg:w-240 aspect-square rounded-full overflow-hidden shadow-xl border-4 border-indigo-500 bg-gray-200"
        >
          <img
            src="/assets/DP.jpg"
            alt="Dhruv Patel"
              className="w-full h-full object-cover object-center"
          />
        </motion.div>




        {/* ===================== TEXT SECTION ===================== */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            I'm <span className="font-semibold">Dhruv Patel</span>, a passionate 
            <span className="text-indigo-600 font-semibold"> Software Engineer</span> currently pursuing B.Tech in Computer Science at 
            <span className="font-semibold"> SRM University (CGPA 9.5)</span>.

            <br /><br />

            I enjoy building web applications, solving complex algorithmic problems, 
            and learning new technologies. My key strengths include 
            <span className="font-semibold"> C++, Java, SQL, React, and Tailwind CSS</span>.  
            I also have hands-on experience with 
            <span className="font-semibold"> Oracle APEX, backend logic, and IoT-based solutions.</span>

            <br /><br />

            Apart from coding, I participate in hackathons and enjoy building practical 
            projects like EduConnect, Task Management System, and AI Chatbot.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
