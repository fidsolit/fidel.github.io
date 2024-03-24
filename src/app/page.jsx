"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "300vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full  flex flex-col lg:flex-row">
        {/* {image conatainer} */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* {text container} */}
        <div className="h-1/2 mx-4 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title here */}
          <h1 className="text-4xl md:text-6xl font-bold">
            {" "}
            Full Stack Fusion: Uniting Frontend Artistry with Backend Mastery
          </h1>

          <p className="">
            A dedicated and detail-oriented React developer with a strong
            understanding of modern web development principles. Proficient in
            creating robust and responsive user interfaces using React.js and
            related libraries. Experienced in implementing complex features,
            optimizing performance, and collaborating effectively with
            cross-functional teams.
          </p>

          <div className="flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View my work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
