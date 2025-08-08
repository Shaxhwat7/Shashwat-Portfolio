"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Image4 from "@/public/About.jpg";

const About = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-black px-4 pt-16 text-white md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Column */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Main Heading */}
            <motion.h1
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hi, I'm Shashwat
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              className="text-xl font-medium text-gray-300 md:text-2xl lg:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I build things that live on the web
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="text-lg leading-relaxed text-gray-300 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A dedicated and results-driven Software Engineering student specializing in Cloud Computing. 
              I'm currently pursuing my Bachelor's in Computer Science and Engineering at Dehradun Institute of Technology (DIT),
              where I've built a strong academic foundation alongside practical experience in full stack development.
            </motion.p>

            {/* Button */}
            {/* <motion.a
              href="#contact"
              aria-label="Contact Me"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              Contact Me
            </motion.a> */}
          </div>

          {/* Image Column */}
          <div className="relative order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Subtle shadow */}
              <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-50" />
              
              {/* Image container */}
              <div className="relative h-80 w-64 md:h-96 md:w-80 lg:h-[450px] lg:w-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={Image4}
                  alt="Shashwat - Professional Portrait"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
