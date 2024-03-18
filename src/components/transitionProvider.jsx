"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";

const TransitionProvider = ({ children }) => {
  return (
    <AnimatePresence>
      <div className="w-screen h-screen bg-gradient-to-b from-blue--100 to-red-100">
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
        />
        <div className="h-24">
          <Navbar />
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
