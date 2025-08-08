'use client';

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image4 from "@/public/About.jpg";
import ScrollingText from './ScrollingText';

export default function Me() {
  return (
    <motion.div
      className="mb-16 mt-20 px-4 sm:px-6 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="flex flex-col-reverse items-center justify-between sm:flex-row sm:items-start gap-10">
        {/* Text Content */}
        <motion.div
          className="text-left sm:w-3/4 pl-4 sm:pl-6 lg:pl-16 space-y-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div>
            <motion.h1
              className="text-xl font-bold md:text-3xl lg:text-4xl text-white"
              whileHover={{ scale: 1.03 }}
            >
              Shashwat Sharma
            </motion.h1>
            <motion.h2
              className="text-sm font-normal md:text-base text-gray-400"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Software Engineering Student | Cloud Computing Enthusiast
            </motion.h2>
          </div>

          <div className="text-white space-y-6 leading-relaxed">
            <p>
              Hello! I'm <strong>Shashwat Sharma</strong>, a dedicated and results-driven Software Engineering student specializing in <strong>Cloud Computing</strong>. I'm currently pursuing my Bachelor's in Computer Science and Engineering at <strong>Dehradun Institute of Technology (DIT)</strong>, where I’ve built a strong academic foundation alongside practical experience in full stack development.
            </p>

            <p>
              I'm passionate about <strong>problem-solving</strong> and building impactful software. My core skills include:
            </p>

            <ul className="list-disc pl-6">
              <li>Developing scalable web applications using the <strong>MERN stack</strong></li>
              <li>Implementing efficient algorithms and data structures in <strong>Python</strong></li>
            </ul>

            <div>
              <p className="font-semibold text-2xl mb-3  ">Projects:</p>
              <ul className="list-disc pl-6">
                <li><strong>DevChat</strong> – A real-time chatroom application featuring:</li>
                <ul className="list-disc pl-10 mt-1">
                  <li>End-to-End Encryption</li>
                  <li>Privacy-focused architecture</li>
                  <li>Interactive and responsive frontend</li>
                </ul>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-2xl mb-3">Achievements:</p>
              <ul className="list-disc pl-6">
                <li>Global LeetCode Rank ~14,000 (<strong>Top 4%</strong> – <strong>Knight Badge</strong>)</li>
                <li>Rank under 500 in a LeetCode Weekly Contest</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-2xl mb-3">Leadership & Academics:</p>
              <ul className="list-disc pl-6">
                <li>Discipline Captain in school, fostering leadership and teamwork</li>
                <li>Maintained consistent academic performance with a <strong>CGPA of 7.0</strong></li>
              </ul>
            </div>

            <p>
              I aim to build <strong>scalable</strong>, <strong>secure</strong>, and <strong>user-centric</strong> software solutions. I enjoy exploring emerging technologies, participating in hackathons, and collaborating with other passionate developers.
            </p>

            <p>Let’s connect and build something impactful together!</p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.linkedin.com/in/shashwatsharma7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-200"
              >
                <FaLinkedin className="text-2xl mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Shaxhwat7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-all duration-200"
              >
                <FaGithub className="text-2xl mr-2" />
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/Shaxhwat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-500 hover:text-green-700 transition-all duration-200"
              >
                <FaLaptopCode className="text-2xl mr-2" />
                LeetCode
              </a>
            </div>
          </div>
        </motion.div>

        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1.05, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="sm:w-1/4 flex justify-center"
        >
          <Image
            src={Image4}
            alt="Shashwat Sharma"
            width={250}
            height={290}
            className="rounded-full object-cover border-4 border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* LeetCode Stats */}
      <div className="mt-20 pl-4 sm:pl-6 lg:pl-16">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          🚀 LeetCode Stats
        </motion.h2>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img
            src="https://leetcard.jacoblin.cool/shaxhwat?theme=dark&ext=heatmap"
            alt="LeetCode Calendar Heatmap"
            className="rounded-xl shadow-lg border border-gray-700 w-full max-w-2xl"
          />
        </motion.div>
      </div>

      {/* Scrolling Text Animation */}
      <div className="mt-24">
        <ScrollingText text="MERN Stack. Problem Solver. Knight Badge @ LeetCode." />
      </div>
    </motion.div>
  );
}
