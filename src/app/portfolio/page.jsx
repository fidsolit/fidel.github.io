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
      title: "KAKKA DIARY BAR",
      description:
        "HTML  CSS JAVASCRIPT REACT JS PHP with FACEBOOK API AND GOOGLE API CHADCN and DAISY UI",
      img: "KAKA.png",
      link: "https://kakkadairybar.000webhostapp.com/",
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
      className="h-full bgforPort"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="glowPort">
        <h1 className="textProj"> PROJECTS</h1>
      </div>
      <div className="md:justify-center md:items-center md:flex shadow-sm w-screen h-auto">
        {items.map((data) => (
          <div
            key={data.id}
            className="card sm:w-auto bg-blue-100 shadow-xl m-3 max-sm:mx-2 md:w-1/2 lg:w-1/4 h-auto rounded-md ease-in-out duration-300 md:hover:scale-110 p-3"
          >
            <figure>
              <img src={data.img} alt="sample project" />
            </figure>
            <div className="card-body mx-2">
              <h2 className="card-title font-bold">{data.title}</h2>

              <p className="text-sm">{data.description}</p>
              <div className="card-actions justify-end mx-2 md:flex md:justify-center md:items-center">
                <Link href={`/productDetails/`}>
                  <button className="outline-none cursor-pointer px-6 py-2 mt-5 mr-3 md:text-sm rounded bg-slate-900 text-white hover:bg-white hover:text-black rounded-sm ease-in-out duration-300 ">
                    See details
                  </button>
                </Link>
                <Link href={data.link}>
                  <button className="outline-none cursor-pointer px-6 py-2 mt-5 rounded bg-slate-900 text-white hover:bg-white hover:text-black rounded-sm ease-in-out duration-300 ">
                    Goto live
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Design Carousel Section */}
      <div className="glowPort">
        <h1 className="textProj">Designs</h1>
      </div>
      <div className="md:justify-center md:items-center md:flex shadow-sm w-screen h-auto">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          className="w-full md:w-3/4 lg:w-1/2 mx-auto"
        >
          {designs.map((design) => (
            <div key={design.id}>
              <img
                src={design.img}
                alt={design.alt}
                className="h-96 object-contain"
              />
              <p className="legend">{design.alt}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="h-10"></div>
    </motion.div>
  );
};

export default About;
