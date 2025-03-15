"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const About = () => {
  const projects = { ProjectName: "", DadteAccomplish: "", Link: "" };
  const graphicDesign = { ProjectName: "", DadteAccomplish: "", Link: "" };
  const useref = useRef();
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Global Impact",
      description:
        "HTML CSS JAVASCRIPT REACT JS PHP with FACEBOOK API AND GOOGLE API",
      img: "gisupport home.png",
      link: "https://gisupport.org",
    },
    {
      id: 2,
      color: "from-red-300 to-blue-300",
      title: "KAKKA DAIRY BAR",
      description:
        "HTML CSS JAVASCRIPT REACT JS PHP with FACEBOOK API AND GOOGLE API CHADCN and DAISY UI",
      img: "KAKA.png",
      link: "https://kakkadairybar.000webhostapp.com/",
    },
    {
      id: 2,
      color: "from-red-300 to-blue-300",
      title: "Outsourcingcx",
      description:
        "HTML CSS JAVASCRIPT NEXT JS  with FACEBOOK API AND GOOGLE API CHADCN and DAISY UI",
      img: "outsourcingcx.png",
      link: "https://outsourcingcx.vercel.app/",
    },
  ];

  const designs = [
    {
      id: 1,
      img: "/designs/1.jpg",
      alt: "Design 1",
    },
    {
      id: 2,
      img: "/designs/2.jpg",
      alt: "Design 2",
    },
    {
      id: 3,
      img: "/designs/3.jpg",
      alt: "Design 3",
    },
    {
      id: 4,
      img: "/designs/4.jpg",
      alt: "Design 4",
    },
    {
      id: 5,
      img: "/designs/5.jpg",
      alt: "Design 5",
    },
  ];

  return (
    <motion.div
      className="h-full bg-gray-50"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Projects Section */}
      <div className="py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 px-4">
          {items.map((data) => (
            <div
              key={data.id}
              className="card bg-gradient-to-r from-red-300 to-blue-300 shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 w-80"
            >
              <figure>
                <img
                  src={data.img}
                  alt="Sample project"
                  className="rounded-t-lg object-cover w-full h-48"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title font-bold text-lg text-gray-900">
                  {data.title}
                </h2>
                <p className="text-sm text-gray-700 mt-2">{data.description}</p>
                <div className="mt-4 flex gap-2 justify-center">
                  <Link href={`/Portfoliodetails/`}>
                    <button className="px-4 py-2 text-sm rounded bg-gray-900 text-white hover:bg-white hover:text-gray-900 border border-gray-900 transition-all">
                      See Details
                    </button>
                  </Link>
                  <Link href={data.link}>
                    <button className="px-4 py-2 text-sm rounded bg-gray-900 text-white hover:bg-white hover:text-gray-900 border border-gray-900 transition-all">
                      Go to Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Carousel Section */}
      <div className="py-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Designs
        </h1>
        <div className="max-w-4xl mx-auto">
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {designs.map((design) => (
              <div key={design.id}>
                <img
                  src={design.img}
                  alt={design.alt}
                  className="h-96 w-full object-cover"
                />
                <p className="legend">{design.alt}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
