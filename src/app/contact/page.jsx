"use client";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "300vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <h3>Contact me</h3>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="message" />
    </motion.div>
  );
};

export default Contact;
