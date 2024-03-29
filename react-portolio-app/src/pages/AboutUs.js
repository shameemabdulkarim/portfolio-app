import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Faqsection from "../components/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <Faqsection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
