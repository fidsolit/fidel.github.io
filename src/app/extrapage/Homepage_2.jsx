"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Fill these in with your own details
const NAME = "Your Name";
const STACK = ["React", "Next.js", "Node.js"];
const STATUS = "available";

// The "code" that types itself into the hero card.
// Each line is a list of tokens so we can color them like a real editor.
const codeLines = [
  [
    { t: "const", c: "keyword" },
    { t: " developer = {", c: "punct" },
  ],
  [
    { t: "  name", c: "prop" },
    { t: ": ", c: "punct" },
    { t: `"${NAME}"`, c: "string" },
    { t: ",", c: "punct" },
  ],
  [
    { t: "  role", c: "prop" },
    { t: ": ", c: "punct" },
    { t: `"Full Stack Developer"`, c: "string" },
    { t: ",", c: "punct" },
  ],
  [
    { t: "  stack", c: "prop" },
    { t: ": [", c: "punct" },
    ...STACK.flatMap((s, i) => [
      { t: `"${s}"`, c: "string" },
      { t: i < STACK.length - 1 ? ", " : "", c: "punct" },
    ]),
    { t: "],", c: "punct" },
  ],
  [
    { t: "  status", c: "prop" },
    { t: ": ", c: "punct" },
    { t: `"${STATUS}"`, c: "string" },
    { t: ",", c: "punct" },
  ],
  [{ t: "};", c: "punct" }],
];

const tokenColor = {
  keyword: "text-[#3E7263]",
  prop: "text-[#15181F]",
  string: "text-[#A8542E]",
  punct: "text-[#8B8F97]",
};

const lineVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0 },
};

const CodeCard = () => (
  <div className="w-full max-w-xl rounded-lg border border-[#E3E0D5] bg-white shadow-[0_1px_2px_rgba(21,24,31,0.04)] overflow-hidden">
    {/* window chrome */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E3E0D5] bg-[#EFEDE4]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#E3958A]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#E8CC8C]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#9FC4A8]" />
      <span className="ml-3 font-mono text-xs text-[#8B8F97]">developer.ts</span>
    </div>

    {/* code body */}
    <motion.pre
      className="p-6 font-mono text-[13px] md:text-[15px] leading-[1.9] overflow-x-auto"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.18, delayChildren: 0.6 }}
    >
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          variants={lineVariants}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {line.map((tok, j) => (
            <span key={j} className={tokenColor[tok.c]}>
              {tok.t}
            </span>
          ))}
        </motion.div>
      ))}
      <BlinkingCursor />
    </motion.pre>
  </div>
);

const BlinkingCursor = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className="inline-block w-[8px] h-[1em] align-middle bg-[#15181F] ml-1"
      style={{ opacity: visible ? 1 : 0 }}
    />
  );
};

const Homepage = () => {
  return (
    <motion.div
      className="h-full bg-[#FAFAF7]"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <div className="h-full lg:w-fit mx-auto flex flex-col lg:flex-row">
        {/* image container */}
        <div className="h-1/3 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        {/* text container */}
        <div className="mx-4 lg:h-full lg:w-1/2 flex flex-col gap-6 items-start justify-center py-10">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B8F97]">
            // full stack developer
          </span>

          <CodeCard />

          <p className="font-sans text-[#15181F]/80 leading-relaxed max-w-lg">
            A dedicated and detail-oriented developer with a strong
            understanding of modern web development principles. Proficient in
            building robust, responsive interfaces and implementing complex
            features while collaborating closely with cross-functional teams.
          </p>

          <div className="flex flex-wrap gap-3 font-mono text-sm">
            <Link href={"/portfolio"}>
              <button className="px-5 py-3 rounded-md bg-[#15181F] text-white hover:bg-[#15181F]/90 transition-colors">
                $ open portfolio
              </button>
            </Link>

            <button className="px-5 py-3 rounded-md border border-[#15181F] text-[#15181F] hover:bg-[#15181F] hover:text-white transition-colors">
              $ contact --me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
