"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/*
  DESIGN NOTES
  - Font: add JetBrains Mono in your root layout, e.g. via next/font:
      import { JetBrains_Mono, Inter } from "next/font/google";
      const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
      const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
    then add `${mono.variable} ${inter.variable}` to your <body> className.
  - Palette lives inline as Tailwind arbitrary values so this drops in without
    touching tailwind.config. Move to theme tokens later if you want.
*/

const stack = ["React.js", "Next.js", "Node.js"];

const Homepage = () => {
  return (
    <motion.div
      className="h-full bg-[#0F1419]"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-full mx-auto max-w-6xl px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-10">
        {/* editor window */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="rounded-lg border border-[#232B36] bg-[#151B23] shadow-2xl shadow-black/40 overflow-hidden">
            {/* tab bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#232B36] bg-[#11161D]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E67E80]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E6B450]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5FB3B3]" />
              <span className="ml-3 text-xs font-mono text-[#6B7789]">
                about-me.js
              </span>
            </div>

            {/* code body */}
            <div className="px-5 py-6 font-mono text-sm sm:text-base leading-relaxed">
              <Line n={1}>
                <Kw>const</Kw> developer <Op>=</Op> <Punc>{"{"}</Punc>
              </Line>
              <Line n={2} indent={1}>
                role<Punc>:</Punc>{" "}
                <Str>&quot;Full Stack Developer&quot;</Str>
                <Punc>,</Punc>
              </Line>
              <Line n={3} indent={1}>
                stack<Punc>:</Punc> <Punc>[</Punc>
                {stack.map((s, i) => (
                  <span key={s}>
                    <Str>&quot;{s}&quot;</Str>
                    {i < stack.length - 1 && <Punc>, </Punc>}
                  </span>
                ))}
                <Punc>]</Punc>
                <Blink />
              </Line>
              <Line n={4}>
                <Punc>{"}"}</Punc>
              </Line>

              <div className="mt-6 pl-6 text-[#6B7789] font-sans text-sm sm:text-[15px] leading-relaxed border-l border-[#232B36]">
                {"/* "}
                A dedicated, detail-oriented developer with a strong grip on
                modern web fundamentals. I build robust, responsive UIs with
                React and Next.js, ship complex features end to end with
                Node.js, and care as much about performance and clean
                collaboration as I do about pixels.
                {" */"}
              </div>
            </div>
          </div>

          {/* terminal CTAs */}
          <div className="flex flex-wrap gap-3 mt-6 font-mono text-sm">
            <Link href="/portfolio">
              <button className="group flex items-center gap-2 px-5 py-3 rounded-md bg-[#5FB3B3] text-[#0F1419] font-semibold hover:bg-[#79c4c4] transition-colors">
                <span className="opacity-70">$</span> view-work
              </button>
            </Link>
            <button className="flex items-center gap-2 px-5 py-3 rounded-md border border-[#232B36] text-[#E6E6E6] hover:border-[#5FB3B3] hover:text-[#5FB3B3] transition-colors">
              <span className="opacity-50">$</span> contact-me
            </button>
          </div>
        </div>

        {/* portrait */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative h-64 sm:h-80 lg:h-[28rem]">
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-20"
            style={{
              background:
                "radial-gradient(circle, #5FB3B3 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(#E6E6E6 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <Image src="/hero.png" alt="" fill className="object-contain relative" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

/* --- tiny presentational helpers, keep the JSX above readable --- */

const Line = ({ n, indent = 0, children }) => (
  <div className="flex" style={{ paddingLeft: `${indent * 1.25}rem` }}>
    <span className="w-6 shrink-0 select-none text-[#3A4451] text-right pr-3">
      {n}
    </span>
    <span className="text-[#E6E6E6]">{children}</span>
  </div>
);

const Kw = ({ children }) => <span className="text-[#5FB3B3]">{children}</span>;
const Str = ({ children }) => <span className="text-[#E6B450]">{children}</span>;
const Op = ({ children }) => <span className="text-[#6B7789]">{children}</span>;
const Punc = ({ children }) => (
  <span className="text-[#6B7789]">{children}</span>
);
const Blink = () => (
  <span
    className="inline-block w-[2px] h-4 bg-[#5FB3B3] ml-1 align-middle"
    style={{ animation: "blink 1s step-end infinite" }}
  />
);

export default Homepage;
