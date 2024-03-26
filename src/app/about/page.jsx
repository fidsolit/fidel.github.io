"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* {Container} */}

      <div className="">
        {/* {text container } */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* {biography container} */}
          <div className="flex flex-col gap-12 justify-center">
            <h1>BIOGRAPHY</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quidem autem reprehenderit beatae laudantium obcaecati voluptatum,
              aspernatur eum tempora voluptatibus enim. Aspernatur numquam nobis
              fuga aperiam nemo recusandae, aliquam cupiditate.
            </p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          {/* {SKILLS container} */}
          <div className="">SKILLS</div>
          {/* {Experience container} */}
          <div className="">EXPERIENCE</div>
        </div>

        {/* {svg container} */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default About;
