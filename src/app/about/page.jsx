"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "300vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
    >
      about my
    </motion.div>
  );
};

export default About;
